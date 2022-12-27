const express = require('express');
const router = express.Router();
const UserController = require("../controller/userController");
const ProductController = require("../controller/productController");
const CartController = require("../controller/cartController")
const OrderController = require("../controller/orderController")
const auth = require("../middleware/auth");



router.post("/register", UserController.createUser);

router.post("/login", UserController.login);

router.get("/user/:userId/profile", auth.authentication, auth.authorisation, UserController.getUser);

router.put('/user/:userId/profile', auth.authentication, auth.authorisation, UserController.updateUser);

router.post('/products', ProductController.createProduct);

router.get("/products", ProductController.getProductbyQuery);

router.get("/products/:productId", ProductController.getProductsById);

router.put("/products/:productId", ProductController.updateProduct);

router.delete("/products/:productId", ProductController.deleteProduct);

router.post("/users/:userId/cart", auth.authentication, auth.authorisation, CartController.createCart);

router.put("/users/:userId/cart", auth.authentication, auth.authorisation, CartController.updateCart);

router.get("/users/:userId/cart", auth.authentication, auth.authorisation, CartController.getCart);

router.delete("/users/:userId/cart", auth.authentication, auth.authorisation, CartController.deleteCart);

router.post("/users/:userId/orders", auth.authentication, auth.authorisation, OrderController.createOrder);

router.put("/users/:userId/orders", auth.authentication, auth.authorisation, OrderController.updateOrder);







module.exports = router;