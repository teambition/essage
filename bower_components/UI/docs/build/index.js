#!/usr/bin/env node
var jade = require('jade')
  , fs    = require('fs')
  , prod  = process.argv[2] == 'production'
  , title = 'teambition UI'
  , dirPrefix = '/../templates/pages/';

// retrieve pages
var pages = fs.readdirSync(__dirname + dirPrefix);

// iterate over pages
pages.forEach(function (name) {
  if (!name.match(/\.jade$/)) return;
  var page = fs.readFileSync(__dirname  + dirPrefix + name, 'utf-8');
  page = jade.compile(page, {filename: __dirname + '/../templates/layout.jade', pretty: true});
  page = page({title: title});

  fs.writeFileSync(__dirname + '/../' + name.replace(/jade$/, 'html'), page, 'utf-8')
})