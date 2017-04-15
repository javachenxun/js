/**
 * Created by chenxun on 2017/4/15.
 *  独立写法，增加jQuery命名空间（相当于java中给$对象添加了一个ext的内部静态类）
 *  使用方式：$.ext.methodName(参数：可以是juqery对象或其他)
 */
//
 (function (jQuery,window) {
    jQuery.ext = {
        max:function (a,b) {
             return Math.max(a,b);
        },
        min:function (a,b){
            return Math.min(a,b);
        },
        getText:function (_$) {
            return _$.text();
        },
        getJsonObject:function () {
            function Json() {
                this.index = 0,
                    this.data = [],
                    this.addJson = function (key,value) {
                        this.data[this.index++] = "\"" + key + "\":\"" + value.toString() + "\"";
                        return this;
                    },
                    this.toString = function () {
                        return this.data.join(",");
                    }
            }
            return new Json();
        },
        getHtml:function (_$) {
            return _$.html();
        },
        getTextAndHtml:function (_$) {
            return this.getJsonObject()
                .addJson("text", _$.text())
                .addJson("html", _$.html()).toString();
        }
    };
})(jQuery,window);
