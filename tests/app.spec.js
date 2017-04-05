
var expect = require('chai').expect;
var app = require('../app/app');

it('should return false, because of string', function()
    {
        expect(app.findMin([1,2,3,'a'])).to.eql(false);

    });
it ('should return Min value',function(){
    expect(app.findMin([1,2,3])).to.eql(1);
});
