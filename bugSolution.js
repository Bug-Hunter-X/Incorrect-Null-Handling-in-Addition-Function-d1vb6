function foo(a, b) {
  //Use nullish coalescing operator to handle null or undefined values
  const aValue = a ?? 0; 
  const bValue = b ?? 0; 
  return aValue + bValue;
}