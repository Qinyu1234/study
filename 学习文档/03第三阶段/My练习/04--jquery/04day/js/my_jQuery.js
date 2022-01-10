$(function () {
$.extend({
    min:function (a,b) {
        return a > b ? b : a;
    },
    max:function (a,b) {
        return a > b ? a : b;
    },
    trimLeft:function (str) {
        return str.replace(/^\s+/,'');
    },
    trimRight:function (str) {
        return str.replace(/\s+$/,'')
    }
})
    $.fn.extend({
        checkAll:function () {
            this.prop('checked',true)
        },
        noCheckAll:function () {
            this.prop('checked',false)
        },
        reversalCheck:function () {
            this.each(function () {
                this.checked = !this.checked
            })
        }
    })

})