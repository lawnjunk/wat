'use strict'

// load sass and index.html
require('./scss/base.scss')
require('!!file?name=[name].[ext]!./html/index.html');

// require npm modules
const $ = require('jquery')
const cowsay = require('cowsay-browser')
// require app modules
// write app logic

$().ready(function(){
  console.log('wat')
  $('.example').html('<pre>' + cowsay.say({text: 'hey'}) + '</pre>')
})

