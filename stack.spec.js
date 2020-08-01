const Stack = require('./stack');

describe('Stacks', () => {
  stack = new Stack();

  beforeEach(() => {
    stack = new Stack();
  });

  it('Allows us to look at the last element in the stack', () => {
    expect(stack.peek()).toEqual(undefined);
  });

  it('Allows us to insert elements into the list', () => {
    stack.insert(1);

    expect(stack.peek()).toEqual(1);
  });

  it('Only shows us the last element added to the list', () => {
    stack.insert(1);
    stack.insert(2);
    stack.insert(3);

    expect(stack.peek()).toEqual(3);
  });

  it('Allows us to remove the last element added', () => {
    stack.insert(1);
    stack.insert(2);
    stack.insert(3);

    expect(stack.remove()).toEqual(3);
    expect(stack.peek()).toEqual(2);
  });

  it('Returns the correct length upon inspecting the length property', () => {
    stack.insert(1);
    stack.insert(2);
    stack.insert(3);

    expect(stack.length).toEqual(3);

    stack.remove();

    expect(stack.length).toEqual(2);
  });
});
