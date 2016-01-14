'use strict';

class Stack {
	constructor() {
		this.items = []
	}

	push(ele) {
		this.items.push(ele)
	}

	pop() {
		return this.items.pop()
	}

	peek() {
		return this.items[this.items.length - 1]
	}

	isEmpty() {
		return this.items.length === 0
	}
}

module.exports = Stack;
