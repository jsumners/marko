'use strict';

var Node = require('./Node');

class Identifier extends Node {
    constructor(def) {
        super('Identifier');
        this.name = def.name;
    }

    generateCode(codegen) {
        return this;
    }

    writeCode(writer) {
        var name = this.name;
        writer.write(name);
    }

    toString() {
        return this.name;
    }
}

module.exports = Identifier;