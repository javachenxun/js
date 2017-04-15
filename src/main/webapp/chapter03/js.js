/**
 * Created by chenxun on 2017/4/3.
 */
/**
 * typeof ：运算符，instanceof ： 运算符,参数.constructor ： 属性
 * typeof 关键字的使用，typeof 返回类型的字符串，一共六种
 * 判断传递类型进行不同的处理
 * @param run
 * @constructor
 */
function ITypeof (run) {
    this.run = run;
}
ITypeof.prototype={
    run:"",
    getRunType:function () {
        console.log("参数类型为:" + typeof this.run);
        switch (typeof this.run) {
            case "function" :
                this.run();
                break;
            case  "string":
                console.log(this.run)  ;
                break;
            case  "number":
                console.log(this.run);
                break;
            case  "boolean":
                console.log(this.run);;
                break;
            case  "object":
                console.log("传递为对象 或传递为null关键字");
                break;
            case  "undefined":
                console.log("什么都没传 ");
        }
    }
}
/**
 * instanceof出现原因？
 * instanceof 运算符在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，
 * 它都返回 "object"。ECMAScript 引入了另一个 Java 运算符 instanceof 来解决这个问题。
 */
function tInstanceof(o) {
    if(o instanceof String){
        console.log(o.toString()+"类型为：String")
    }
    if(o instanceof ITypeof){
        console.log(o.toString()+"类型为：ITypeof")
    }
}