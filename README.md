# Incorrect Null Handling in Addition Function

This repository demonstrates a common JavaScript bug related to incorrect null value handling in an addition function.

## Bug Description

The `foo` function adds two numbers. However, it incorrectly handles null values. If either `a` or `b` is null, it returns 0, which might not be the desired behavior in all cases.  A more robust solution would explicitly check for null or undefined values and handle them appropriately, perhaps by throwing an error, returning a default value (like NaN), or using the nullish coalescing operator (??).

## Bug Solution

The solution demonstrates a more robust approach that uses the nullish coalescing operator to handle null or undefined values appropriately.  This ensures that the addition operates correctly even when one or both input values are null or undefined.
