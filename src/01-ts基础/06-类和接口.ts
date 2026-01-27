interface IFunc {
    getName: () => string
}

class A implements IFunc {
    a1() {}
    a2() {}
    getName() {
        return 'aaa'
    }
}
class B implements IFunc {
    b1() {}
    b2() {}
    getName() {
        return 'bbb'
    }
}
function init(obj: IFunc) {
    objA.getName()
}
var objA = new A()
var objB = new B()
init(objA) //aaa
init(objB) //bbb

export default {}
