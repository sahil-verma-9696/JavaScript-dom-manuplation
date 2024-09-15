var boy = {
    name: "sahil verma ",
    age: 21,
    dp: "https://images.unsplash.com/photo-1610500795224-fb86b02926d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95fGVufDB8fDB8fHww"
}
var girl = {
    name: "sonal verma",
    age: 20,
    dp: "https://images.unsplash.com/photo-1648889179757-067baf9d42c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhYnklMjBnaXJsJTIwd2l0aCUyMHB1cnBsZSUyMGRyZXNzfGVufDB8fDB8fHww"
}


var boob = {
    name : "Boob sighaniya",
    age : 45,
    dp : "https://plus.unsplash.com/premium_photo-1661758525529-4d6c2e60e90f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
}

function updateCard(dataObj) {
    var img = document.getElementById("dp");
    var name = document.getElementById("name");
    var age = document.getElementById("age");

    img.src = dataObj.dp;
    name.innerText = dataObj.name
    age.innerText = dataObj.age
}

updateCard(boob)