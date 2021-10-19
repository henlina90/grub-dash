# :file_folder: grub_dash_app: Food delivery app called GrubDash
### This project includes back-end API and specific routes for the demo of the application and design by front-end.

Run `npm install` to install the project

### Project features
- Allows user to Create, Read, and Update dishes through the dishes router.
- Allows user to Create, Read, Update, and Delete orders through the orders router.

### Learning objectives
This project will test your ability to build APIs with complex validation. 

Before taking on this project, you should be comfortable with the learning objectives listed below:

- Running tests from the command line
- Using common middleware packages
- Receiving requests through routes
- Accessing relevant information through route parameters
- Building an API following RESTful design principles
- Writing custom middleware functions

### Tasks completed to pass test
- Add handlers and middleware functions to create, read, update, and list dishes. Dishes cannot be deleted.
- Add two routes: /dishes, and /dishes/:dishId and attach the handlers (create, read, update, and list)
- Add handlers and middleware functions to create, read, update, delete, and list orders.
- Add two routes: /orders, and /orders/:orderId and attach the handlers (create, read, update, delete, and list) 
- Anytime you need to assign a new id to an order or dish, use the nextId helper function
