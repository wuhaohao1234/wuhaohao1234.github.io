var domInt = $('input')
var btn = $('button')
var text = $('textarea')



function checkIDCard(idcard) {
    //15位数身份证验证正则表达式：
    var isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;

    //18位数身份证验证正则表达式 ：
    var isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if (isIDCard1.test(idcard) || isIDCard2.test(idcard)) {
        return true;
    } else {
        return false;
    }
}
function ifValue() {
    for(var i = 0;i < domInt.length; i ++) {
        if(domInt[i].value == '') {
            domInt[i].value = '请输入信息'
            return
        }
    }
    if (domInt[0].value.length > 9) {
        domInt[0].value = '请合法输入'
        setTimeout(() => {
            domInt[0].value = ''
        }, 700);
        return
    }
    if (!checkIDCard(domInt[3].value)) {
        domInt[2].value = '请输入正确身份证号码'
        setTimeout(() => {
            domInt[2].value = ''
        }, 700);
        return
    }
    if (text.val() == '') {
        text.val('输入开户行')
        return
    }
    $.ajax({
        url:'http://5ba5b201e04d5100148d2992.mockapi.io/api/v1/MechinaClass',
        type:'post',
        data: {
            "schollNumber": domInt[0].value,
            "name": domInt[1].value,
            "sex": domInt[2].value,
            "identity": domInt[3].value,
            "bank": domInt[4].value,
            "bankString": text[0].value
        },
        success:function (data) {
            console.log(data)
            alert('成功')
        }
    })
    $('body').css({
        'background':'rgba(0,0,255,.3)'
    })
}
btn.on('click',function (e) {
    e.preventDefault()
    ifValue()
})
