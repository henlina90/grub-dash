const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /dishes handlers needed to make the tests pass

// Validate a new dish
function validateNewDish(req, res, next) {
  const { data: { name, description, price, image_url } = {} } = req.body;
  if (!name || name.length === 0) {
    return next({
      status: 400,
      message: "Dish must include a name",
    });
  } else if (!description || description.length === 0) {
    return next({
      status: 400,
      message: "Dish must include a description",
    });
  } else if (!price) {
    return next({
      status: 400,
      message: "Dish must include a price",
    });
  } else if (price <= 0 || isNaN(price)) {
    return next({
      status: 400,
      message: "Dish must have a price that is an integer greater than 0",
    });
  } else if (!image_url || image_url.length === 0) {
    return next({
      status: 400,
      message: "Dish must include a image_url",
    });
  }
  next();
}

// Validate a dish update
function validateDishUpdate(req, res, next) {
  const { data: { id, name, description, price, image_url } = {} } = req.body;

  if (price <= 0 || !Number.isInteger(price)) {
    return next({
      status: 400,
      message: "Dish must have a price that is an integer greater than 0",
    });
  }
  if (id && res.locals.foundDish.id !== id) {
    return next({
      status: 400,
      message: `Dish id does not match route id. Dish: ${id}, Route: ${res.locals.foundDish.id}`,
    });
  }
  next();
}

// Check if dish id exists
function dishExists(req, res, next) {
  const { dishId } = req.params;
  const foundDish = dishes.find((dish) => dish.id === dishId);

  if (!foundDish) {
    next({
      status: 404,
      message: `Dish with ID ${dishId} does not exist`,
    });
  }

  res.locals.foundDish = foundDish;
  return next();
}

// List all existing dishes
function list(req, res) {
  res.json({ data: dishes });
}

// Create a new dish
function create(req, res) {
  const { data: { name, description, price, image_url } = {} } = req.body;

  const newDish = {
    id: nextId(),
    name,
    description,
    price,
    image_url,
  };

  dishes.push(newDish);
  res.status(201).json({ data: newDish });
}

// Retrieve an existing dish
function read(req, res) {
  res.json({ data: res.locals.foundDish });
}

// Update an existing dish if valid
function update(req, res) {
  const { data: { name, description, price, image_url } = {} } = req.body;
  const foundDish = res.locals.foundDish;

  if (foundDish) {
    foundDish.name = name;
    foundDish.description = description;
    foundDish.price = price;
    foundDish.image_url = image_url;
  }

  res.json({ data: foundDish });
}

module.exports = {
  list,
  create: [validateNewDish, create],
  read: [dishExists, read],
  update: [dishExists, validateNewDish, validateDishUpdate, update],
};
