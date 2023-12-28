System.register(["./m.js"], function (exports_1, context_1) {
    "use strict";
    var m_js_1, a;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (m_js_1_1) {
                m_js_1 = m_js_1_1;
            }
        ],
        execute: function () {
            console.log(11);
            a = 3;
            console.log(m_js_1.h1);
        }
    };
});
