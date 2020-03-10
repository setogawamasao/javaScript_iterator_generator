// 01 イテレーターとは

// イテレータ -> 順番にイテレータリザルトを取り出すことのできるオブジェクト
// 1 .next() メソッドを持つ
// 2 .next() を実行すると イテレータリザルト を返す

// イテレータリザルト -> .value プロパティと .done プロパティを持つオブジェクト
// .value プロパティ は、イテレータから取り出した値
// .done  プロパティ は、イテレータから値を順番に取り出し終えたかどうかの 真偽値

var iterator = {}; // イテレータ
iterator.next = function() {
  var iteratorResult = { value: 42, done: false }; // イテレータリザルト
  return iteratorResult;
};
