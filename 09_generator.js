// 09 generatorを使った非同期処理

function asyncFunc(gen, count) {
  setTimeout(() => {
    gen.next(++count); //非同期処理が終わったらgeneratorのnextを叩く。nextに渡した引数はyieldで取り出すことが出来る。
  }, 1000);
}

const generator = (function*() {
  let result = yield asyncFunc(generator, 0); //非同期処理を実行しつつyieldで止め、完了後結果を受け取る。
  console.log(result);
  result = yield asyncFunc(generator, result);
  console.log(result);
  result = yield asyncFunc(generator, result);
  console.log(result);
})();

generator.next();
//1,2,3と1秒間隔で表示される。
