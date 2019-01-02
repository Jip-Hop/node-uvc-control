#!/usr/bin/env node

/*
  Get a device based on vendor ID
  These values can be found by running ./discover.js
*/

const UVCControl = require('../index');

const cam = new UVCControl({
	vid: 1133
});

UVCControl.controls.map(name => {
	cam.get(name, (err, val) => {
		if(err) throw err;
		console.log(name, val);
	});
});
