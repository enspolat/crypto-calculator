const object = [
    {
        btn: document.querySelector("#tree"),
        month: 3,
        apr: 50
    },
    {
        btn: document.querySelector("#six"),
        month: 6,
        apr: 60
    },
    {
        btn: document.querySelector("#twelve"),
        month: 12,
        apr: 70
    },
    {
        btn: document.querySelector("#twentyfour"),
        month: 24,
        apr: 80
    },
];

const apr = document.querySelector("#apr");
const month = document.querySelector("#cost");
const money = document.querySelector("#money");
const total = document.getElementById("total");



for (let i = 0; i < object.length; i++) {
    object[i].btn.onclick = function () {
        let monthly = (100 * (object[i].apr / 12));
        total.innerText = Math.floor(object[i].month * monthly)
        cost.innerText = Math.floor(100 * (object[i].apr / 12));
        apr.innerText = (object[i].apr)
    }
}

