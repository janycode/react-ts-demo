var list = ["1", "2", "3", 4]
for (var i in list) {
    //list[i].substring(0, 1) //ERROR: string | number 不存在 substring()
}

var list1: string[] = ["a", "b", "c"]
list1.push("d")
//list1.push(1) //ERROR: string 数组不能赋值 数字

var list3: number[] = [1, 2, 3]
var list4: (string | number)[] = [1, 2, "aa", "bb"]

// 另一种写法：
var mylist1: Array<string> = ["aa", "bb", "cc"]
mylist1.push("dd")

var mylist2: Array<string | number> = ['aa', 'bb', 11, 22]
mylist2.push('dd')
mylist2.push(33)


export default {}