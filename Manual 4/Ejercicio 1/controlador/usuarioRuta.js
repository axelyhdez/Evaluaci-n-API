'use strict'

var express = require('express');
var UsuarioControl = require('../controlador/usuarioControl');

var api = express.Router();

api.get('/probando-controlador', UsuarioControl.prueba);
api.post('/registro', UsuarioControl.registrarUsuario);

module.exports = api;
