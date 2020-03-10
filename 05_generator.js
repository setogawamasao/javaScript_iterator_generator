// 05 ジェネレータ
// ジェネレータ関数
function* gfn(from, to) {
  while (from <= to) yield from++;
}

// ジェネレータ -> ジェネレータ関数から取得できるオブジェクト
var g = gfn(1, 20);

for (var num of g) console.log(num);
