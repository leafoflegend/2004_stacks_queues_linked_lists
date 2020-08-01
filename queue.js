class Queue {
  #queue = [];

  enqueue = (e) => this.#queue.push(e);

  dequeue = () => this.#queue.shift();

  peek = () => this.#queue[0];

  get length() {
    return this.#queue.length;
  }
}

module.exports = Queue;
