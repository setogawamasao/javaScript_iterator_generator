// 03 イテレータ を使う
var obj = {}; // イテラブルなオブジェクト
obj[Symbol.iterator] = function() {
  var iterator = {}; // イテレータ
  var count = 1;
  iterator.next = function() {
    var iteratorResult; // イテレータリザルト
    if (count <= 10) {
      // .next() を実行するごとにカウントアップして .value で返す
      iteratorResult = { value: count++, done: false };
    } else {
      // count が10を超えたら、.done を true ににする
      iteratorResult = { value: undefined, done: true };
    }
    return iteratorResult;
  };
  return iterator;
};

var iterator = obj[Symbol.iterator](); // イテラブルなオブジェクトからイテレータを取得する
var iteratorResult;
while (true) {
  iteratorResult = iterator.next(); // 順番に値を取りだす
  if (iteratorResult.done) break; // 取り出し終えたなら、break
  console.log(iteratorResult.value); // 値をコンソールに出力
}

console.log("-------------------------------");

// もっと楽にイテレータから値を取り出す
for (var v of obj) {
  console.log(v);
}

// for of の動き
// 1 まず iterator = iterable[Symbol.iterator]() を実行して、イテレータ を取得する
// 2 次に iteratorResult = iterator.next() を実行して、イテレータリザルトを取り出す
// 3 もし iteratorResult.done == true なら、取り出し終えたので終了する。そうでないなら 4. に進む
// 4 v = iteratorResult.value を実行　※上記では、console.log(v)が実行され、値がコンソールに表示される。
// 5 2. に戻る
