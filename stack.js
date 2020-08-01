class Stack {
  #stack = [];

  insert = (e) => this.#stack.push(e);

  remove = () => this.#stack.pop();

  peek = () => this.#stack[this.#stack.length - 1];

  get length() {
    return this.#stack.length;
  }
}

module.exports = Stack;
