const inputUl = document.querySelector('.input-container ul');
let ulLi = document.querySelectorAll('.input-container ul li')
let UlLi = document.querySelectorAll('.input-container ul a')
let containerH1 = document.querySelector('.container-h1')
let ChaoShi = document.querySelector('.input-container button')
let body = document.querySelector('body')

let search = document.querySelector('#search')
ChaoShi.addEventListener('click', function () {

    if (search.value == '') {
        containerH1.innerHTML = '请输入你的需求或应用快捷菜单跳转'
        alert('请输入搜索内容！')
    } else {
        body.style.cursor = 'wait'
        ChaoShi.style.cursor = 'wait'
        let dsq = setInterval(() => {

            body.style.cursor = 'pointer'
            ChaoShi.style.cursor = 'pointer'
            alert('请求超时！')
            clearInterval(dsq)

        }, 3000)
    }
})
console.log(UlLi.innerHTML)
for (let i = 0; i < ulLi.length; i++) {
    ulLi[i].addEventListener('mouseover', function () {
        search.value = UlLi[i].innerHTML
    })
    ulLi[i].addEventListener('click', function () {
        search.value = UlLi[i].innerHTML
        containerH1.innerHTML = UlLi[i].innerHTML
        inputUl.style.opacity = '0';
        inputUl.style.display = 'none';
    })
}

const kuang = document.querySelector('.kuang-bg');
kuang.addEventListener('mouseover', () => {
    inputUl.style.opacity = '1';
    inputUl.style.display = 'grid';
})
kuang.addEventListener('click', () => {
    inputUl.style.opacity = '1';
    inputUl.style.display = 'grid';
})
kuang.addEventListener('mouseout', () => {
    inputUl.style.opacity = '0';
    inputUl.style.display = 'none';
})
inputUl.addEventListener('mouseover', function () {
    inputUl.style.opacity = '1';
    inputUl.style.display = 'grid';


})
inputUl.addEventListener('mouseout', function () {
    inputUl.style.opacity = '0';
    inputUl.style.display = 'none';

})