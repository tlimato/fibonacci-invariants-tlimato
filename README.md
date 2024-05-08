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

Ok I did some additional reading because I had some subtle cofusions with how exactly you communicate an invariant and I'm fairly certain I understand now. Previously I was simply describing a property that was true and could be infered to be true if demonstrated for $n+1$ but its a tad more complex than that. Invariants are not just the means by which you derive the value $n$ and can infer $n+1$ but they are any and all conditions that help you make that inference at any $n$ that remain true for all of these iterations. [source: https://brilliant.org/wiki/invariant-principle-definition/]. The crucial mistake was not describing the role the ACTUAL RESULT array  that's returned has in this algorithm which validates the Invariant. I simply assumed that this worked EXACTLY like inductive hypothesis did in Discrete Structures and it's a bit more nuanced than the examples I did in that class.

**Invariant**:
first of all let fib(n) be the function that computes the n'th Fibonacci number.

The invariant can be stated as: 
At the beginning of every recursive call, the list updated on each recursive call by fib(n), "fibArray" contains all of the fibonnaci numbers up to $n-1$ for any $n$, which is calculated through $fib(n)=fib(n-1)+fib(n-2)$, where $fib(0) = 0$ and $fib(1) = 1$ as defined by the base cases.

**The Base Cases**:

These base cases ($fib(0) = 0$ and $fib(1) = 1$) ensure that the initial elements of fibArray are correctly set. This is because $fib(0) = 0$ and $fib(1) = 1$, which are the always first two Fibonacci numbers and can be assumed to be correct. TO BE VERY CLEAR. these values are stored in fibArray[0] and fibArray[1] before the recursion begins.

**Induction step**:
when n = 2, the fibArray is [0, 1] as these are the base cases prior to recursion where the invariant must hold.
This is the first value the fib() function calculates and the invariant is true at this iteration, as the fibArray is [0, 1] which are the previous Fibonacci numbers up to $n-1$, and the nth iteration calculated [$n=2$] is calculated using $fib(n)=fib(n-1)+fib(n-2)$, which translates $fib(2) = 1 + 0 = 1$ which is the correct Fibonacci value. This value is then pushed to the fibArray [<- IMPORTANT CLARIFICATION]
Given $n+1$ would be the next value to be calculated, the invariant is still true as the fibArray still contains all of the Fibonacci numbers up to $n-1$. Therefore, the invariant is still true throughout recursion.

It's only after we have finished recursion is concluded that we no longer have to worry about the invariant as we have the final result of the fibArray and can just return it knowing it contains all of the Fibonacci numbers up to the final Fibonacci value $n-1$ and $n$ which was calculated during the last recursive call.

## References

My Notes from the lectures and videos and Dr. Kotthoff's numerous replies to my pull requests telling me I'm not focusing on the correct things in my explanation.

Furthermore, I use Github copilot to assist in writing code, It's built into my vs code install I use for Professional work and It's helpful in accelerating projects and avoiding syntax issues. I will make this clarification on other assignments as well.

I used the following resource to format the math expression for the invariant:
https://www.upyesp.org/posts/makrdown-vscode-math-notation/

References consulted to make sure I fully understood the expectation for how invariants are structured and communicated:
https://www.storyofmathematics.com/glossary/invariant/
https://brilliant.org/wiki/invariant-principle-definition/

