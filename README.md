[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.


## Solution

**Invariant**:
Let fib(n) be the function that computes the nth Fibonacci number. The invariant can be stated as: For all $n > 1$, if fib(n-1) and fib(n-2) are correct, then fib(n) is also computed correctly.
Mathematically, this can be expressed as:
$$
\forall n > 1, \text{ if } fib(n-1) = F(n-1) \text{ and } fib(n-2) = F(n-2), \text{ then } fib(n) = F(n)
\text{ where } F(n) \text{ is the true Fibonacci number at index } n.
$$
we can say that the invariant is true at the start of each recursive call because we are starting with the first two Fibonacci numbers, 0 and 1, which are correct by the base cases.

**The Base Cases**:

The base cases (input 0 and 1) ensure that the initial elements of fibArray are correctly set. This is because $fib(0) = 0$ and $fib(1) = 1$, which are the always first two Fibonacci numbers and can be assumed to be correct.

**Induction step**:
In each iteration where $n > 1$, the Fibonacci number for index $n$ is computed as the sum of the Fibonacci numbers at fib(n-1) and fib(n-2).
once the loop has finished, fibArray contains the Fibonacci numbers for all indices up to $n$, satisfying the invariant.

For each recursive call where $n > 1$, fib(n) is computed as the sum of fib(n-1) and fib(n-2).
This computation relies on the correctness of the results for fib(n-1) and fib(n-2), which are assumed correct given the invariant.
Therfore, each step builds upon the previously established correct values, ensuring that fibArray is accurately updated to include the Fibonacci numbers for all indices up to $n$ by the end of the recursion. This satisfies the invariant and maintains the correctness of the sequence throughout the computation.

## References

My Notes from the lectures and videos.
Furthermore, I use Github copilot to assist in writing code, It's built into my vscode install I use for Proffesional work and It's helpful in accelerating projects and avoiding syntax issues. I will make this clarification on other assignments as well.

I used the following resource to format the math expression for the invariant:
https://www.upyesp.org/posts/makrdown-vscode-math-notation/