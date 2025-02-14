function foo(x) {
  if (x === undefined || x === null) {
    return 0; // or handle the undefined case appropriately
  }
  return x.length;
}