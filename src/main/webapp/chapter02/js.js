/**
 * Created by chenxun on 2017/4/2.
 */


//////////////////////////////////////////////////////////
//
//  基本概念
//  创建对象3种方式（一共不止三种）
//  工厂创建，
//  构造函数创建，
//  原型方式创建。
//  当然也可以几种混合使用去创建。
//  比如：构造函数定义对象+原型方式。
//  参考 W3CSchool 高级部分的：定义类或对象章节。
//
//////////////////////////////////////////////////////////

////////////////////////工厂函数创建新的对象/////////////////////////////////////////////////
/**
 * 工厂函数创建新的对象，不常用
 * @param age
 * @param name
 * @returns {*}
 */
function person(age ,name) {
    var p = inherit(person.methods);//methods 名称随意起 ，这也是不使用这种方式的原因
    p.age = age;
    p.name = name;
    return p;
}
person.methods = {
    "description":"Hi,this is prototype property",
    show:function () {
        console.log(this.age+':'+this.name+':'+this.description);
    },
    toString:function () {
        return this.age+':'+this.name+':'+this.description;
    }
}
//来自《JavaScript权威指南》（第六版）在第六章P122：
function inherit(proto) {
    if (proto == null)
        throw TypeError();//proto是一个对象，但不能是null
    if (Object.create)
        return Object.create(proto); //如果Object.create()存在,使用它
    var t = typeof proto; //否则进一步检查
    if (t !== 'object' && t !== 'function')
        throw TypeError();
    var F = function () {
    }; // 定义一个空构造函数
    F.prototype = proto; // 将其原型属性设置为proto
    return new F(); // 使用F()创建proto的继承对象
}
////////////////////////构造函数创建对象/////////////////////////////////////////////////

/**
 * 构造函数创建对象
 * @param color
 * @param eatFood
 * @constructor
 */
function Cat(color,eatFood) {
    this.color = color;
    this.eatFood = eatFood;
    this.catShow = function () {
        console.log("这是一只"+this.color+"猫，爱吃"+this.eatFood);
    }
}
/**
 * 反例：
 * 虽然{} 代表对象定义，但这种方式不能通过new创建
 * @type {{name: undefined, color: undefined, show: Dog.show}}
 */
var dog = {
    name:undefined,
    color:undefined,
    init:function (name,color) {
        this.color = color;
        this.name =name;
    },
    show:function () {
        console.log(this.name+":"+this.color);
    }
}

////////////////////////原型方式////////////////////////////////////////////////
// function Car() {
// }
// Car.prototype.color = "blue";
// Car.prototype.doors = 4;
// Car.prototype.mpg = 25;
// /**
//  *  构造函数可以避免这一点，像这样
//  *  this.drivers = new Array("Mike","John");
//  */
// Car.prototype.drivers = new Array("Mike","John");//创建的所有对象都指向这一个数组，原型方式带来的问题
// Car.prototype.showColor = function() {
//     alert(this.color);
// };
// var oCar1 = new Car();
// var oCar2 = new Car();
// oCar1.drivers.push("Bill");
// alert(oCar1.drivers);	//输出 "Mike,John,Bill"
// alert(oCar2.drivers);	//输出 "Mike,John,Bill"
// 由于 drivers 是引用值，Car 的两个实例都指向同一个数组。这意味着给 oCar1.drivers 添加值 "Bill"，
// 在 oCar2.drivers 中也能看到。输出这两个指针中的任何一个，结果都是显示字符串 "Mike,John,Bill"。

////////////////////////构造函数定义对象+原型方式（属于混合创建）/////////////////////////////////////////////////
/**
 * 使用构造函数定义对象+原型方式（属于混合创建）
 * 构造函数名称大写，普通函数名称小写，这也是两种函数的命名区别
 * @param age
 * @param name
 * @constructor
 */
function Person (age ,name) {
    this.age = age;
    this.name = name;
}
Person.prototype = {  //构造函数名称.prototype  固定写法
    "description":"Hi,this is prototype property",
    show:function () {
        console.log(this.age+':'+this.name+':'+this.description);
    },
    toString:function () {
        return this.age+':'+this.name+':'+this.description;
    }
}
//类的方法扩展
Person.prototype.extMthod=function () {
    console.log("extMthod="+this.age+':'+this.name+':'+this.description);
}