var btn1 = document.querySelector(".last1");
var btn2 = document.querySelector(".last2");
var btn3 = document.querySelector(".last3");
var btn4 = document.querySelector(".last4");
let jiading = false
let VIPh1 = document.querySelector(".vip-content h1");
if (jiading) {
    VIPh1.innerHTML = "您好，VIP用户";
} else {
    VIPh1.innerHTML = "您好，普通用户";
}
let shoukuanma = document.querySelector(".shoukuanma");

let shoukuanmaP = document.querySelector(".shoukuanma p");
let shoukuanmaBtn = document.querySelector(".shoukuanma button");
let shoukuanmaA1 = document.querySelector(".shoukuanma a:nth-child(1)");
let shoukuanmaA2 = document.querySelector(".shoukuanma a:nth-child(2)");
let shoukuanmaChoice = document.querySelector(".shoukuanma-Choice");
let shoukuanmaLodin = document.querySelector(".lodin");
shoukuanmaBtn.addEventListener("click", function () {
    shoukuanma.style.display = "none";
    shoukuanmaA2.style.display = "none";
    shoukuanmaA1.style.display = "none";
})
shoukuanmaA1.addEventListener("click", function () {
    shoukuanma.style.display = "none";
    shoukuanmaLodin.style.display = "block";
    shoukuanmaA2.style.display = "none";
    shoukuanmaA1.style.display = "none";
    let dsq = setTimeout(() => {
        shoukuanmaLodin.style.display = "none";
        clearInterval(dsq)
    }, 1500);
    jiading = true
    if (jiading) {
        VIPh1.innerHTML = "您好，VIP用户";
    } else {
        VIPh1.innerHTML = "您好，普通用户";
    }
});
shoukuanmaA2.addEventListener("click", function () {
    alert('充值失败')
    shoukuanma.style.display = "none";
    shoukuanmaLodin.style.display = "block";
    shoukuanmaA2.style.display = "none";
    shoukuanmaA1.style.display = "none";
    let dsq = setTimeout(() => {
        shoukuanmaLodin.style.display = "none";
        clearInterval(dsq)
    }, 1500);
});
btn1.addEventListener("click", function () {
    // jiading = true

    // if (jiading) {
    //     VIPh1.innerHTML = "您好，VIP用户";
    // } else {
    //     VIPh1.innerHTML = "您好，普通用户";
    // }
    alert("暂无更多，如需解锁请充值");
});
btn2.addEventListener("click", function () {
    // jiading = true

    // if (jiading) {
    //     VIPh1.innerHTML = "您好，VIP用户";
    // } else {
    //     VIPh1.innerHTML = "您好，普通用户";
    // }
    shoukuanma.style.display = "flex";
    shoukuanmaP.innerHTML = "请支付15.9￥";
    let dsq = setInterval(() => {
        shoukuanmaP.innerHTML = "请确认是否充值成功";
        shoukuanmaP.style.bottom = "-50%"
        shoukuanmaA1.style.display = "flex";
        shoukuanmaA2.style.display = "flex";
        clearInterval(dsq)
    }, 5000);
});
btn3.addEventListener("click", function () {
    // jiading = true

    // if (jiading) {
    //     VIPh1.innerHTML = "您好，VIP用户";
    // } else {
    //     VIPh1.innerHTML = "您好，普通用户";
    // }
    shoukuanma.style.display = "flex";
    shoukuanmaP.innerHTML = "请支付39.9￥";
    let dsq = setInterval(() => {
        shoukuanmaP.innerHTML = "请确认是否充值成功";
        shoukuanmaP.style.bottom = "-50%"
        shoukuanmaA1.style.display = "flex";
        shoukuanmaA2.style.display = "flex";
        clearInterval(dsq)
    }, 5000);
});
btn4.addEventListener("click", function () {
    // jiading = true

    // if (jiading) {
    //     VIPh1.innerHTML = "您好，VIP用户";
    // } else {
    //     VIPh1.innerHTML = "您好，普通用户";
    // }
    shoukuanma.style.display = "flex";
    shoukuanmaP.innerHTML = "请支付119.9￥";
    let dsq = setInterval(() => {
        shoukuanmaP.innerHTML = "请确认是否充值成功";
        shoukuanmaP.style.bottom = "-50%"
        shoukuanmaA1.style.display = "flex";
        shoukuanmaA2.style.display = "flex";
        clearInterval(dsq)
    }, 5000);
});

