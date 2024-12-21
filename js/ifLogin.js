const urlparams = new URLSearchParams(window.location.search);
const username = urlparams.get('Username');
const password = urlparams.get('Password');
console.log(username, password);
let Username = document.getElementById('Username');
let Password = document.getElementById('Password');
let loginBtn = document.getElementById('loginBtn');
function login() {

    if (Username.value == username && Password.value == password) {
        alert('登录成功！');
        window.location.href = '../index.html';

    } else {
        alert('用户名或密码错误！');
        Username.value = '';
        Password.value = '';
    }
}
