## 原生js Core

##### 1.方法如何才能执行，又何时被执行？dom就绪前，就绪和就绪之后执行的方式？

##### 2.创建对象的方式：构造函数定义对象；工厂函数创建新的对象

##### 3.typeof：关键字；instanceof ：关键字；参数.constructor：属性
* typeof：基本类型的区分，区分不了对象和Null
* instanceof：对象的区分
* constructor：对象的区分

##### 4.apply，call

    1.出现call,apply的原因：继承，相当于把call前的方法继承给了context（当context为对象时特别明显）
    2.执行的是call前的方法（或对象的方法）
    3.参数使用context【通过this.参数名称使用】 的或者传入的【直接使用】
    4.区别：call.(context,arg1，arg1,...) apply.(context,[arg1，arg1,...])

##### 5.js中可以直接使用对象有三种：本地对象、内置对象和宿主对象。
 - 本地对象：
    - arguments：隐式获取参数个数和参数
    - Function ：类可以直接创建函数的语法
    - Object ： ECMAScript 中的 Object 对象与 Java 中的 java.lang.object 相似，ECMAScript 中的所有对象都由这个对象继承而来，Object 对象中的所有属性和方法都会出现在其他对象中。
    - Array 
    - Boolean 
    - Date 
    - Number 
    - String
    - RegExp
- 内置对象：ECMA-262 只定义了两个内置对象，不必明确实例化内置对象，它已被实例化了。相当于java中的工具类的静态方法。
   - Global ：全局属性和函数，直接使用函数名称即可。如`decodeURI() ，encodeURI()`
   - Math ：提供数学计算相关，使用Math.方法名称
- 宿主对象：所有 BOM 和 DOM 对象都是宿主对象。

##### 6.闭包

    个人理解：类似java中的私有属性，经典的JaveBean类 ，属性私有化，提供get/set供外界访问。提供外部访问内部属性的途径。

##### 7.匿名函数的多样写法：多用于插件的扩展

##### 8.jQuery相关
* 扩展jquery的类方法（也就是静态方法）:jQuery.extend({});**不能通过对象去调用，否则报错**
* 扩展jquery的对象
   * 扩展jquery的对象的方法:jQuery.fn.extend({一组方法}),jQuery.fn.函数名称 =function(){单个}**不能通过静态类去调用，否则报错**
   * jQuery的对象内部扩展一个自定义的对象
* 3种写法
   * 基本写法（不独立）
   * 独立写法(独立一个单独的文件)
   * 独立写法，增加jQuery命名空间（相当于java中给$对象添加了一个ext的内部静态类）；**使用方式：$.ext.methodName(参数：可以是juqery对象或其他)**
  
##### 9.插件开发

1. 重写alert函数

## 书写性

1. js语句如果没有分号，ECMAScript 就把折行代码的结尾看做该语句的结尾，前提是这样没有破坏代码的语义。虽然**可有可无，但是还是建议添加**。
2. var 语句定义的变量不必具有相同的类型。比如：`var test = "hi", age = 25;` 这就是弱类型的随性。
3. js中变量你给**它赋值value，它就是属性；给它赋值函数，它就是方法**。
4. js中的**函数即对象**。书写时**对象名称一般首字母大写，普通方法一般首字母小写**。
5. 字符串字面量是由双引号（"）或单引号（'）声明的。
6. **this** 往往与函数运行的上下文有关系。

## 概念性（摘抄自W3CSchool的API）
1. 一个完整的 JavaScript 实现是由以下 3 个不同部分组成的：
 * JavaScript 的核心 ECMAScript 描述了该语言的语法和基本对象；
 * DOM 描述了处理网页内容的方法和接口；
 * BOM 描述了与浏览器进行交互的方法和接口。
2. **js中也存在堆和栈**，原始值和引用值在 ECMAScript 中，变量可以存在两种类型的值，即原始值（存在于栈中）和引用值（存在于堆中）。
 * 存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。
 * 存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存处。 
 * **在许多语言中，字符串都被看作引用类型，而非原始类型，因为字符串的长度是可变的。ECMAScript 打破了这一传统。js的字符串存储在的找中**
 * ECMAScript 有 5 种原始类型（primitive type），即 Undefined、Null、Boolean、Number 和 String
     * Undefined ：类型只有一个值，即 undefined。当声明的变量未初始化时，该变量的默认值是 undefined。
     * Null ：只有一个值的类型是 Null，它只有一个专用值 null，即它的字面量。值 undefined 实际上是从值 null 派生来的，因此 ECMAScript 把它们定义为相等的。`alert(null == undefined);  //输出 "true"`。尽管这两个值相等，但它们的含义不同。undefined 是声明了变量但未对其初始化时赋予该变量的值，null 则用于表示尚未存在的对象（在讨论 typeof 运算符时，简单地介绍过这一点）。如果函数或方法要返回的是对象，那么找不到该对象时，返回的通常是 null。

## 工作中问题总结
1.关于jquery中插件覆盖问题。当给jquery扩展完对象，如果再次加载jquery对象，那么之前加载扩展对象将不存在。
  如何避免：保证一个页面一种js文件只引入一次。




       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
