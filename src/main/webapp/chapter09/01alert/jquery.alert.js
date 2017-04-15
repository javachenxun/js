charset = "UTF-8";
(function (win,$) {
    this._win = win;
    this._$ = $;
    this._win.alert = function ( msg,title ) {
        var m = $("#alertId").width()/2
        var container = _$("<div></div>").css({
            position: "fixed",
            left: "50%",
            top: "50%",
            width: "300px",
            height:"130px",
            margin:"-65px 0 0 -150px",/*很巧妙的居中*/
            zIndex: "100000",
            textAlign: "center",
            lineHeight: "150px",
        }).attr("id", "alertId");

        var content = _$("<ul></ul>").addClass("ul").append(
            $("<li></li>").addClass("title").html(title == undefined ? "提示" : title),
            $("<li></li>").addClass("content").html(msg),
            $("<li></li>").addClass("btn-wrap").append(
                $("<input type='button' value='确 定'></input>").addClass("btn").click(function () {
                    _$("#alertId").remove();
                })
            )
        );
        container.append(content);
        $("body").append(container);
        // alertFram.focus();
        // this._win.document.body.onselectstart = function(){return false;};
    }
})(window,jQuery);