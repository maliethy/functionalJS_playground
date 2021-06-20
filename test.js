const a = 0,
  b = 1,
  c = 1, //h,r
  d = 1, //h error
  e = 0; //r error
// c= 1 => H
a || b
  ? c && !d
    ? console.log("h")
    : !c && !e
    ? console.log("r")
    : null
  : null;
