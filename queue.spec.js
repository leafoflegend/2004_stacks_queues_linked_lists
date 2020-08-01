const Queue = require('./queue');


describe('Queue', () => {
  let queue = new Queue();

  beforeEach(() => {
    queue = new Queue();
  });

  it('Returns undefined for the first element when none are there.', () => {
    expect(queue.peek()).toEqual(undefined);
  });

  it('Expect that elements can be inserted into the queue.', () => {
    queue.enqueue(1);

    expect(queue.peek()).toEqual(1);
  });

  it('Expect that elements are returned in FIFO order.', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toEqual(1);
  });

  it('Can have elements removed in FIFO order.', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
  });

  it('Returns the correct length upon inspecting the length property', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.length).toEqual(3);

    queue.dequeue();

    expect(queue.length).toEqual(2);
  });
});
