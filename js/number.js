Number.prototype.between = function (a, b) {
  let min = Math.min.apply(Math, [a, b]),
      max = Math.max.apply(Math, [a, b]);
  return this >= min && this < max;
};

Number.prototype.before = function (a) {
  let num = parseInt( a );
  return this < num;
};

Number.prototype.after = function (a) {
  let num = parseInt( a );
  return this >= num;
};
