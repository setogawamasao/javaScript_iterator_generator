// 07 ジェネレータに値を渡す

function* gfn() {
  var a = yield "first";
  var b = yield "second";
  yield a + b;
}

var g = gfn();

console.log(g.next()); // { value: "first", done: false }

console.log(g.next(3)); // { value: "second", done: false }
// yield "first" の部分が 3 に置き換えられる

console.log(g.next(5)); // { value: 8, done: false }
// yield "second" の部分が 5 に置き換えられる

console.log(g.next()); // { value: undefined, done: true }
