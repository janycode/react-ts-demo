function *test() {
    console.log("1111");
    var input1 = yield "111-输出";
    console.log("2222", input1);
    var input2 = yield "222-输出";
    console.log("3333", input2);
    var input3 = yield "333-输出";
    console.log("4444", input3);
}

var res = test()
var res1 = res.next() // next 一次会走到第一个 yield
console.log(res1);
var res2 = res.next("aaa") // next 二次会走到第二个 yield
console.log(res2);
var res3 = res.next("bbb") // next 三次会走到第三个 yield
console.log(res3);
var res4 = res.next("ccc")
console.log(res4);


function *test1() {
    setTimeout(() => {
        console.log("111-success");
        res.next()
    }, 1000)
    yield;
    setTimeout(() => {
        console.log("222-success");
        res.next()
    }, 1000)
    yield;
    setTimeout(() => {
        console.log("333-success");
    }, 1000)
    yield;
}
var res = test1()
res.next()
