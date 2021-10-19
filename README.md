# :file_folder: grub_dash_app: Food delivery app called GrubDash
### This project includes back-end API and specific routes for the demo of the application and design by front-end.

Run `npm install` to install the project

### Project Features
- Allows user to Create, Read, and Update dishes through the dishes router.
- Allows user to Create, Read, Update, and Delete orders through the orders router.

### Learning Objectives
This project will test your ability to build APIs with complex validation. 

Before taking on this project, you should be comfortable with the learning objectives listed below:

- Running tests from the command line
- Using common middleware packages
- Receiving requests through routes
- Accessing relevant information through route parameters
- Building an API following RESTful design principles
- Writing custom middleware functions

### Tasks Completed
- Add handlers and middleware functions to create, read, update, and list dishes. Dishes cannot be deleted.
- Add two routes: /dishes, and /dishes/:dishId and attach the handlers (create, read, update, and list)
- Add handlers and middleware functions to create, read, update, delete, and list orders.
- Add two routes: /orders, and /orders/:orderId and attach the handlers (create, read, update, delete, and list) 
- Anytime you need to assign a new id to an order or dish, use the nextId helper function

### Grading Rubric
- All tests are passing in Qualified.
- All middleware and handler functions have a single responsibility and are named functions.
- All data passed between middleware and handler functions uses response.locals.
- All chained method calls on a route(...) end with all(methodNotAllowed).
- All update handlers guarantee that the id property of the stored data cannot be overwritten.
