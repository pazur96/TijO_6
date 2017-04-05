var expect = require('chai').expect;
var app = require('../app/app');

it('should return false when parameters arent numbers', function(){
    expect(app.findMax([1, 2, 3, 'a'])).to.eql(false);
});

it('should return min value', function () {
    expect(app.findMax([1, 2, 3])).to.eql(3);
});


