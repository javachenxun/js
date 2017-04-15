/**
 * Created by chenxun on 2017/4/3.
 */

/**
 * arguments对象
 * arguments对象并不是一个数组,属于隐身对象，无需声明，直接访问
 * 可以用作模拟函数重载
 */
function testArguments() {
    var r = '';
    if(arguments.length>0){
        r = '[';
        for (var i = 0; i < arguments.length; i++) {
            if(i==arguments.length-1){
                r = r + arguments[i] + "]";
            }else{
                r = r + arguments[i] + ",";
            }
        }
    }
    console.log("共" + arguments.length + "个参数分别是:" + r)
}
/**
 * Function对象
 * Function 类可以直接创建函数的语法
 * 每个 arg 都是一个参数，最后一个参数是函数主体（要执行的代码）。这些参数必须是字符串。
 * 执行体中 非参数前面添加 \" 转义符
 *
 * 调用函数 testFunction("chen","xun");
 */
var testFunction = new Function("arg1","arg2","console.log(\"result=\"+ arg1+arg2);");
