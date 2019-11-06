# JavaScript Fundamentals: Arrays Lab

## Learning Goals

* Practice writing arrays
* Practice manipulating arrays

## Introduction

We've seen how arrays can be created and manipulated. Now we can
practice putting it all together. To recap, `push()` *pushes* elements onto
the *ends* of arrays, and `pop()` *pops* them off; similarly, `unshift()` *adds*
elements to the *beginnings* of arrays, and `shift()` *pulls* them off. Now it's
time to practice what we've learned.

## Practice Writing Arrays

We're going to work with actions that _mutate_ ("change") their underlying
structures (like `pop()`, `push()`, `shift()`, and `unshift()`).

Generally, it's good practice to avoid mutating a program's state whenever
possible. However, for now, we're going to focus on the fundamentals of
working with `Array`s.

1. Run `learn`.
2. Read the errors; vocalize what they're asking you to do.
3. Write code; repeat steps 1 and 2 often until a test passes.
4. Repeat as needed for further tests.
5. Run `learn submit` when finished!

First, we're going to create four arrays of pets. Define 4 `const` called:
`append`, `prepend`, `removeLast` and `removeFirst`, and set all to an initial
value of `["Milo", "Otis", "Garfield"]`. These are the `array`s that we'll work
with for each exercise.

> **NOTE**: "Append" means "add to the end" and "prepend" means "add to the
> beginning."

## Practice Manipulating Arrays

1. Append the pet "Odie" to the end of `append`.
2. Prepend the pet "Odie" to the beginning of `prepend`.
3. Remove the _last_ pet from `removeLast`.
4. Remove the _first_ pet from `removeFirst`.

## Conclusion

We put our array knowledge into practice by writing and manipulating arrays.
We also covered the concept of mutating state.
