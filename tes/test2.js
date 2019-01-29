var assert = require('chai').assert;
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
});