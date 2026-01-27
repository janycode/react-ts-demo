interface IObj {
    name: string,
    age: number,
    location?: string,  //? 可选属性，赋值时可以没有 location 字段
    [propName: string]: any  // 不关心类型的字段，只关心其他限定类型的字段
}

var obj1: IObj = {
    name: "jerry",
    //age: "18"  //ERROR 类型不符
    age: 18,
    //location: "china" //可选字段
    item: {name: "tom", type: 1}
}
console.log(obj1.name, obj1.age);


export default {}