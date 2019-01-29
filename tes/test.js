var chai =  require('chai'),
calculator = require('../lib/ejercicio1Rank'),
assert = chai.assert;

describe('prueba de operaciones',()=>{
    it('prueba de la suma',()=>{
        assert.equal([1,2,3,4,5,6,7,8].indexOf(5),4);
        //skip para escapar el test
        //only para ejecutar solo un test
    });

    it('prueba de arrays',()=>{
        assert.equal([1,2,3].indexOf(4),-1);
    });
    it('prueba de funcion',()=>{
        assert
    });
});

/*var assert = require('chai').assert;
var tateti = require("../lib/prueba");

describe('TATETI', function() {


    describe('#rows', function () {
   
   
    it('should return true for TATETI when all columns are equal and not null', function() {
    var board = [
    [2,2,2],
    [null,1,null],
    [null,1,1]
    ];
    assert(tateti.tatetiRow(0, board));
    });
 });
});*/