$(document).ready(function() {
    "use strict";
    var i=0;
    var headerWrapper = document.getElementById("header-wrapper");
    var navBar=document.getElementById("nav-bar");
//  鼠标滚轮
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {
            if (e.wheelDelta / 120 > 0 && i>0) {
                i=0;
                headerWrapper.style.top=0;
                navBar.style.height=140 + 'px';
            }
            else if (e.wheelDelta / 120 < 0 && i<7) {
                i++;
                headerWrapper.style.top=-i*13 +'px';
                navBar.style.height=140-i*i+'px';
            }
        }
        else if (e.detail) {
            if (e.detail / 3 < 0 && i > 0) {
                i=0;
                headerWrapper.style.top=0;
                navBar.style.height=140+'px';
            }
            else if (e.detail / 3 > 0 && i<7) {
                i++;
                headerWrapper.style.top=-i*13 +'px';
                navBar.style.height=140-i*i+'px';
            }
        }
    };
    /*注册事件*/
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }//W3C
    window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome/Safari
});

/*!
 *  Echo v1.4.0
 *  Lazy-loading with data-* attributes, offsets and throttle options
 *  Project: https://github.com/toddmotto/echo
 *  by Todd Motto: http://toddmotto.com
 *  Copyright. MIT licensed.
 */
window.Echo = (function(window, document, undefined) {

    'use strict';

    var store = [],
        offset,
        throttle,
        poll;

    var _inView = function(el) {
        var coords = el.getBoundingClientRect();
        return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset));
    };

    var _pollImages = function() {
        for (var i = store.length; i--;) {
            var self = store[i];
            if (_inView(self)) {
                self.src = self.getAttribute('data-echo');
                store.splice(i, 1);
            }
        }
    };

    var _throttle = function() {
        clearTimeout(poll);
        poll = setTimeout(_pollImages, throttle);
    };

    var init = function(obj) {
        var nodes = document.querySelectorAll('[data-echo]');
        var opts = obj || {};
        offset = opts.offset || 0;
        throttle = opts.throttle || 250;

        for (var i = 0; i < nodes.length; i++) {
            store.push(nodes[i]);
        }

        _throttle();

        if (document.addEventListener) {
            window.addEventListener('scroll', _throttle, false);
        } else {
            window.attachEvent('onscroll', _throttle);
        }
    };

    return {
        init: init,
        render: _throttle
    };

})(window, document);