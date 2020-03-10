// 02 イテラブル (Iterable) とは
// イテラブル -> イテレータを持つオブジェクト
// = [Symbol.iterator]() メソッドを実行すると イテレータ を返す

var iterator = {}; // イテレータ
iterator.next = function() {
  var iteratorResult = { value: 42, done: false }; // イテレータリザルト
  return iteratorResult;
};

var obj = {}; // イテラブルなオブジェクト
obj[Symbol.iterator] = function() {
  return iterator;
};

//  symbol -> 一度作成した symbol はそれ自身とのみ等しい。
// =まったく同じ symbol は二度と作ることはできない。

if (Symbol() === Symbol()) {
  console.log("同じ");
} else {
  console.log("異なる");
}

if (Symbol("abc") === Symbol("abc")) {
  console.log("同じ");
} else {
  console.log("異なる");
}

console.log(Symbol);
console.log(Symbol.iterator);
