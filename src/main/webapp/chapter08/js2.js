/**
 * Created by chenxun on 2017/4/15.
 *  独立写法(独立一个单独的文件)
 */

(function (jQuery,window) {
    /**
     * 扩展jquery类的静态方法:不能通过对象去调用，否则报错
     */
    jQuery.extend({
        max:function (a,b) {
            return Math.max(a,b);
        },
        min:function (a,b){
            return Math.min(a,b);
        }
    });
    /**
     * 扩展jquery的对象的方法，不能通过静态类去调用，否则报错
     */
//单个写法
    jQuery.fn.getText=function () {
        return this.text();
    }
//给jQuery对象内部扩展一个自定义的对象
    jQuery.fn.getJsonObject= function () {
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
    }
//一组写法
    jQuery.fn.extend({
        getHtml:function () {
            return this.html();
        },
        getTextAndHtml:function () {
            return this.getJsonObject()
                .addJson("text", this.text())
                .addJson("html", this.html()).toString();
        }
    });
})(jQuery,window);
