var expect = require('chai').expect;
var app = require('../app/app');
describe('test', function ()
{
    it('isPrime () true', function (){
        expect(app.isPrime(13)).to.be.true;
    });
    it('isPrime () false', function (){
        expect(app.isPrime(4)).to.be.false;
    });
});
describe('areaOfTrapezoid()', function (){
    it('should return false', function ()
    {
        expect(app.areaOfTrapezoid(-5,2,3)).to.eql(false);
    });

    it('calculate areaOfTrapezoid', function ()
    {
        expect(app.areaOfTrapezoid(2,3,2)).to.eql(5);
    });
});