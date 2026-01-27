// c?: number  可选参数，如果传入则必须数字类型
function test1(a: string, b: string, c?: number): string {
    let res = a.substring(0, 1) + b.substring(0, 1)
    return res
}
let myname: string = test1('jerry', 'tom')
console.log(myname) //jt

interface IFunc {
    (a: string, b:string, c?:number): string
}
var test2: IFunc = test1   //接口约束函数，参数与返回值类型都一致 - 极少使用

interface IObj {
    name: string,
    age: number,
    getName: (name: string) => string
}
var obj: IObj = {
    name: "jerry",
    age: 18,
    getName: (newName: string) => {
        return newName
    }
}
obj.getName("tom")


export default {}
