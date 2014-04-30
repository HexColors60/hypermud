﻿var uuid = require("node-uuid");
var assert = require("assert");

var Altitude = function(args) {
    args = args || {};
    
    assert.ok(args.name && args.description, "Need a name and description for altitude.");

    this.uuid = args.uuid || uuid.v1();
    this.name = args.name;
    this.description = args.description;

    return this;
};

module.exports = Altitude;