class LinkedList {
  next = null;
  prev = null;
  value = null;

  constructor(value) {
    this.value = value;
  }

  getVals = () => {
    return {
      value: this.value,
      next: this.next.value,
      prev: this.prev.value,
    };
  }

  append = (ll) => {
    const val = ll instanceof LinkedList ? ll : new LinkedList(ll);

    if (!this.next) {
      this.next = val;
      this.next.prev = this;
    } else {
      this.next.append(val);
    }
  }

  iterate = (cb) => {
    cb(this.value);

    if (this.next) {
      this.next.iterate(cb);
    }
  }

  find = (cb) => {
    const result = cb(this.value);

    if (result) return this;
    else if (this.next) return this.next.find(cb);
    else return null;
  }

  remove = () => {
    const nextNode = this.next;
    const prevNode = this.prev;

    if (nextNode) {
      nextNode.prev = prevNode;
    }

    if (prevNode) {
      prevNode.next = nextNode;
    }
  }
}

const first = new LinkedList(0);

for (let i = 0; i < 10; ++i) {
  first.append(i + 1);
}


const four = first.find((e) => e === 4);

console.log('Four: ', four.getVals());

const five = first.find((e) => e === 5);
five.remove();
// The Garbage Collector comes and removes five.

console.log('Four: ', four.getVals());

// first.iterate((e) => console.log(e));

// I want to remove an element from the middle of the list. How do I keep the list intact after the removal?

