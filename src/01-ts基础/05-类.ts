class Bus {
    public name = 'jerry'   //共有属性
    private _list: any = {} //私有属性
    protected age = 18      //保护属性
    subscribe(cb: any) {
        this._list.push(cb)
    }
    dispatch() {
        this._list.forEach((cb: any) => {
            cb && cb()
        })
    }
}
var b1 = new Bus()
//console.log(b1._list); // private 不允许直接访问
console.log(b1.name) //jerry

class Child extends Bus {
    test() {
        //console.log(super._list);  //也无法访问到
        console.log(this.name, this.age) //jerry 18
    }
}
var c1 = new Child()
console.log(c1.test()) //jerry 18

export default {}
