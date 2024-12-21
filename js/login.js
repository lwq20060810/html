
function wjmm() {
    while (true) {
        let math = prompt(`请按要求输入纯数字，其他无效
                1.忘记密码
                2.注册账号
                
                `)
        if (math == "1") {
            alert('密码重置邮件已发送至您的邮箱，请注意查收')
            break
        }
        if (math == "2") {
            window.location.href = "zhuce.html"
            break
        }
        continue
    }
}
let lz1 = document.querySelector('.stars')
let lz2 = document.querySelector('.stars2')
let lz3 = document.querySelector('.stars3')
let lz4 = document.querySelector('.stars4')
let lz5 = document.querySelector('.stars5')
let lz6 = document.querySelector('.stars6')
let lz7 = document.querySelector('.stars7')
let lz8 = document.querySelector('.stars8')
let stop = document.querySelector('.button')
stop.addEventListener('click', function () {

    while (true) {
        let math = prompt(`请按要求输入纯数字，其他无效
                1.开启粒子
                2.关闭粒子
                3.粒子消失
                4.取消选择
                `)
        if (math == "1") {
            lz1.style.animation = 'stars1 linear infinite 9s'
            lz1.style.left = '-300%'
            lz2.style.display = "block"
            lz3.style.display = "block"
            lz4.style.display = "block"
            lz5.style.display = "block"
            lz6.style.display = "block"
            lz7.style.display = "block"
            lz8.style.display = "block"
            break
        }
        if (math == "2") {
            lz1.style.animation = 'none'
            lz1.style.left = '50%'
            lz2.style.display = "none"
            lz3.style.display = "none"
            lz4.style.display = "none"
            lz5.style.display = "none"
            lz6.style.display = "none"
            lz7.style.display = "none"
            lz8.style.display = "none"
            break
        }
        if (math == "3") {
            lz1.style.animation = 'none'
            lz1.style.left = '-300%'
            lz2.style.display = "none"
            lz3.style.display = "none"
            lz4.style.display = "none"
            lz5.style.display = "none"
            lz6.style.display = "none"
            lz7.style.display = "none"
            lz8.style.display = "none"
            break
        }
        if (math == "4") {
            break
        }
        continue
        i++
    }



})




let btn = document.querySelector('#btn')
// let bg = document.querySelector('body')
// let bgimg = [
//     '','','',''
// ]
// let i = 0
// setInterval(function () {
//     bg.style.backgroundImage = "url('"+bgimg[i]+"')"
//     i++
//     if (i == bgimg.length) {
//         i = 0
//     }
// }, 5000)

let btn2 = document.querySelector('#btn2')
let UsernameZhuce = document.querySelector('#UsernameZhuce')
let PasswordZhuce = document.querySelector('#PasswordZhuce')
let yesPassword = document.querySelector('#yesPassword')
let UsernameValue
let PasswordValue
let yesPasswordValue
let help = document.querySelector('.help')




function validate() {
    if (UsernameZhuce.value == '' || PasswordZhuce.value == '' || yesPassword.value == '') {
        alert('请填写完整信息')
        return false
    }
    if (PasswordZhuce.value != yesPassword.value) {
        alert('两次密码不一致')
        return false
    }
    if (UsernameZhuce.value.length < 6 || UsernameZhuce.value.length > 12) {
        alert('账号长度为6-12位')
        return false
    }
    if (PasswordZhuce.value.length < 6 || PasswordZhuce.value.length > 12) {
        alert('密码长度为6-12位')
        return false
    }
    if (UsernameZhuce.value.match(/^\d+$/)) {
        alert('账号不能为纯数字')
        return false
    }
    if (PasswordZhuce.value.match(/^\d+$/)) {
        alert('密码不能为纯数字')
        return false
    }
    // if (UsernameZhuce.value.match(/^\w+$/)) {
    //     alert('账号不能为纯字母')
    //     return false
    // }
    // if (PasswordZhuce.value.match(/^\w+$/)) {
    //     alert('密码不能为纯字母')
    //     return false
    // }
    if (UsernameZhuce.value.match(/^\w+@\w+\.[a-zA-Z]{2,3}$/)) {
        alert('账号格式不正确')
        return false
    }
    if (PasswordZhuce.value.match(/^\w+@\w+\.[a-zA-Z]{2,3}$/)) {
        alert('密码格式不正确')
        return false
    }
    if (UsernameZhuce.value.match(/^\w+@\w+\.[a-zA-Z]{2,3}$/) || PasswordZhuce.value.match(/^\w+@\w+\.[a-zA-Z]{2,3}$/)) {
        alert('账号或密码格式不正确')
        return false
    }
    if (UsernameZhuce.value.match(/^\w+@\w+\.[a-zA-Z]{2,3}$/) && PasswordZhuce.value.match(/^\w+@\w+\.[a-zA-Z]{2,3}$/)) {
        alert('账号或密码格式不正确')
        return false
    }
    return true;
}
function handleSubmit(event) {
    event.preventDefault(); // 阻止默认表单提交
    const username = document.getElementById('UsernameZhuce').value;
    const password = document.getElementById('PasswordZhuce').value;

    // 构造URL并跳转
    window.location.href = `login.html?Username=${encodeURIComponent(username)}&Password=${encodeURIComponent(password)}`;
}