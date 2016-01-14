var expect = require('chai').expect;
var Queue = require('../src/queue.js');

var queue = null;

describe('Queue', function() {
  beforeEach(() => {
    queue = new Queue();
  })

  it('enqueue element', function() {
    queue.enqueue(1)

    expect(queue.items[0]).to.be.equal(1)
  })

  it('dequeue element', function() {
    queue.enqueue(1)

    expect(queue.dequeue()).to.be.equal(1)

    // body...
  })

  it('return front element', function() {
    queue.enqueue(1)

    expect(queue.front()).to.be.equal(1)
  })

  it('queue is empty', function() {
    queue.enqueue(1)

    expect(queue.isEmpty()).to.not.be.ok
  })

  it('clear queue', function() {
    queue.enqueue(1)

    expect(queue.clear()).to.be.empty

  })

  it('calc queue size', function() {
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.size()).to.be.equal(2)
  })

})
