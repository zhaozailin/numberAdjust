/**
 * Created by zhaozl on 2016-07-18.
 */
var numberAdjust = (function() {
    var initUI = function(id) {
        var $dom = $("#" + id);
        $dom.contents().find("div.num-adjust-up").off().on("click", function() {
            _increase($dom);
            return false;
        });
        $dom.contents().find("div.num-adjust-down").off().on("click", function() {
            _reduce($dom);
            return false;
        });
        $dom.children("input").blur(function() {
            var curVal = $.trim($(this).val());
            var minVal = parseInt($(this).prop("min"));
            var maxVal = parseInt($(this).prop("max"));

            // 非数字||小于最小值，取最小值
            if (!/^[0-9]+$/.test(curVal) || parseInt(curVal) < minVal) {
                $(this).val(minVal);
            }

            // 大于最大值，去最大值
            else if (parseInt(curVal) > maxVal) {
                $(this).val(maxVal);
            }
        });
    };

    // 减少
    var _reduce = function($dom) {
        var $input = $dom.children("input");
        var curVal = parseInt($.trim($input.val()));
        var minVal = parseInt($input.prop("min"));
        if (curVal > minVal) {
            $input.val(curVal - 1);
        }
    };

    // 增加
    var _increase = function($dom) {
        var $input = $dom.children("input");
        var curVal = parseInt($.trim($input.val()));
        var maxVal = parseInt($input.prop("max"));
        if (curVal < maxVal) {
            $input.val(curVal + 1);
        }
    };

    return {
        initUI: initUI
    };
})();