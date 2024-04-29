const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productoController = require('../controllers/productoController');

// rutas del crud para cliente
router.post('/agregarCliente',clienteController.agregarCliente);
router.get('/buscarCliente',clienteController.buscarCliente);
router.get('/buscarClienteId/:id',clienteController.buscarClienteId);
router.delete('/eliminarCliente/:id',clienteController.eliminarClienteId);
router.put('/actualizarCliente/:id',clienteController.actualizarClienteId);

// rutas del crud para producto
router.post('/agregarProducto',productoController.agregarProducto);
router.get('/buscarProducto',productoController.buscarProducto);
router.get('/buscarProductoId/:id',productoController.buscarProductoId);
router.delete('/eliminarProducto/:id',productoController.eliminarProductoId);
router.put('/actualizarProducto/:id',productoController.actualizarProductoId);

module.exports = router;