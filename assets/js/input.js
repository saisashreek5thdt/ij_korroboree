! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.material = {}, e.jQuery)
}(this, function(e, i) {
    "use strict";
    i = i && i.hasOwnProperty("default") ? i.default : i;
    var n, t, o, r, a, s, c, l, d, u, h, f, p, m, g, y, v, b, _, k, S = (r = "show-predecessor", a = "hide" + (t = ".bs.collapse"), s = (o = "show") + t, c = ".expansion-panel", l = ".expansion-panel .collapse", void(n = i)(document).on("" + a, l, function() {
            var e = n(this).closest(c);
            e.removeClass(o);
            var t = e.prev(c);
            t.length && t.removeClass(r)
        }).on("" + s, l, function() {
            var e = n(this).closest(c);
            e.addClass(o);
            var t = e.prev(c);
            t.length && t.addClass(r)
        })),
        w = (h = "." + (u = "md.floatinglabel"), f = "floatinglabel", p = (d = i).fn[f], m = "is-focused", g = "is-dirty", y = "change" + h, v = "focusin" + h, b = "focusout" + h, _ = {
            DATA_PARENT: ".textfield__field",
            DATA_TOGGLE: ".textfield__field .custom-select, .textfield__field .textfield__input"
        }, k = function() {
            function i(e) {
                this._element = e, this._parent = d(e).closest(_.DATA_PARENT)[0]
            }
            var e = i.prototype;
            return e.change = function() {
                d(this._element).val() || d(this._element).is("select") && "" !== d("option:first-child", d(this._element)).html().replace(" ", "") ? d(this._parent).addClass(g) : d(this._parent).removeClass(g)
            }, e.focusin = function() {
                d(this._parent).addClass(m)
            }, e.focusout = function() {
                d(this._parent).removeClass(m)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = n || "change",
                        t = d(this).data(u);
                    if (t || (t = new i(this), d(this).data(u, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new Error('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, i
        }(), d(document).on(y + " " + v + " " + b, _.DATA_TOGGLE, function(e) {
            k._jQueryInterface.call(d(this), e.type)
        }), d.fn[f] = k._jQueryInterface, d.fn[f].Constructor = k, d.fn[f].noConflict = function() {
            return d.fn[f] = p, k._jQueryInterface
        }, k);
});




$(function () {
    var runCalcs = function () {
        
      // Variables
      var limit = $('.limited');
      var text = limit.val().length;
      var max = limit.data('limit');
      var counter = $('.counter');    
      var count = (max - text);
      
      // Output Number
      counter.html( Math.abs(count) );
      
      if (count < 0) {
        limit.addClass('is-over');
        $('.subt').attr('disabled', 'disabled');
      } else {
        limit.removeClass('is-over');
        $('.subt').removeAttr('disabled', 'disabled');
      }
    };
    
    $(window).ready(function () {    
  
      var changeOn = $('input, select');
      changeOn.on('keydown keyup keypress', function () {
        runCalcs();
      });
      changeOn.trigger('keydown', 'keyup', 'keypress');
  
    }); 
  });