// 08 yield*
// yield* にはイテラブルなオブジェクトを与える
// イテラブルなオブジェクトから順番に値を取り出し、
// それぞれの値に対して yield する。

function* gfn() {
  yield* [1, 3, 5]; // <-イテラブルなオブジェクト:配列
}

var g = gfn();

console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: 5, done: false }
console.log(g.next()); // { value: undefined, done: true }
