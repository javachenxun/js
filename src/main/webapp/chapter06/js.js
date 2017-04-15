/**
 * Created by chenxun on 2017/4/3.
 */

/**
 * 闭包：
 *  官方”的解释是：闭包是一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），
 *                  因而这些变量也是该表达式的一部分。
 *  个人理解：类似java中的私有属性，经典的JaveBean类 ，属性私有化，提供get/set供外界访问。
 *              提供外部访问内部属性的途径。
 *
 * 注意两种的返回 返回函数名字，外部得再次调用
 *                返回内部函数，外部直接调用，最好采用这种。
 * @returns {getIValue}
 */
function getInner1() {
    var i =1;
    function getIValue(){
        return i;
    }
    // 调用必须调用执行  比如    var f = getInner1(); console.log(f()) ,否则返回的是内部函数源码
    return getIValue;

}
function getInner2() {
    var i =2;
    function getIValue(){
        return i;
    }
    // 直接调用即可 console.log(getInner2());
    return getIValue();
}