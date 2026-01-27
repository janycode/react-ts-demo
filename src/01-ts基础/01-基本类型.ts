var myname = "jerry"
myname = myname.substring(0, 1).toUpperCase() + myname.substring(1)
console.log(myname); //Jerry

var myname: string = "tom"
// myname = 100 //编辑器中直接报错

var myage: number = 100
var ageString: string = myage.toFixed(1)  // toFixed 返回值是字符串
console.log(ageString); //100.0

var myshow: boolean = true
myshow = false

var my: string | number = "jerry"  // 不确定具体类型，可以是 string 也可以是 number
my = 20

var myany: any = 100  //any 任何类型
myany = "spike"
myany = [1, 2, 3]

export default {}