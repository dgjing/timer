// Zepto.longpress plugin
//
// Copyright (c) 2017
// @author duanguangjing
//
// Dual licensed under the MIT and GPL licenses

;(function ($) {
    $.extend($.fn, {
        longpress: function (fn) {
            var timeout = null;
            var $this = this;

            for (var i = 0; i < $this.length; i++) {
                $this[i].addEventListener('touchstart', function (event) {
                    timeout = setTimeout(fn, 800);
                }, false);
                $this[i].addEventListener('touchend', function (event) {
                    clearTimeout(timeout);
                }, false);
            }
        }
    });
})(Zepto);