## Stacks

**Pancakes**.

ADT LIFO: Last In, First Out.

When we're cooking ourselves a bounty of pancakes on Sunday morning, we all run into the same problem.

We cook our first pancake, but we have more to cook, so we take it off the griddle and put it on the plate.


======== === pancake # 1
________ === plate

We make a second pancake...

======== === p #2
======== === p #1
________ === plate

When we cook pancakes, the last pancake cooked, is the first one eaten.

The first pancake cooked is always a soggy disaster.

## Queues
Queues are the inverse of a Stack.

They are a FIFO structure, that means First In, First Out.

## Linked Lists

Linked Lists are a structure comprised of various "nodes". Each node in a LL has two components:

{
  pointer: point to the next node | null;
  value: any;
}
