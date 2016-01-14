var Stack = require('../src/stack.js');
var expect = require('chai').expect;

describe('Stack', function() {
  beforeEach(function() {
    stack = new Stack();
  });

  it('push element', function() {
    stack.push(1);

    expect(stack.items[0]).to.be.equal(1);
  });

  it('pop element', function() {
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).to.be.equal(2);
  });

  it('return peek', function() {
    stack.push(1);

    expect(stack.peek()).to.be.equal(1);
  });

  it('stack is empty true', function() {
    expect(stack.isEmpty()).to.be.ok;
  })

  it('stack is empty false', function() {
    stack.push(1);

    expect(stack.isEmpty()).to.not.be.ok;
  })
});
