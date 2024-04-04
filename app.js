let generate = document.getElementById('gen')
let p = document.getElementById('pass')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
// let val = "";
let check1 = document.getElementById('check1')
let check2 = document.getElementById('check2')
let check3 = document.getElementById('check3')
let check4 = document.getElementById('check4')
let cpy = document.getElementById('cpy')

function doThis(password) {
    //let copy = "";
    input1.value = "Generating Password";
    let dem = "Generating Password : "
    let i = 1;
    const secs = setInterval(() => {
        dem = dem + i + " ";
        input1.value = dem;
        i++;
        if(i == 4) clearInterval(secs);
    },1000)
    setTimeout(() => {
        input1.value = password;
        //dothat(password)
        // console.log(password);
    },4000)

    // setTimeout(() => {
    //     function clip() {
    //         navigator.clipboard.writeText(password);
    //         alert("Copied the text : " + password)
    //     }
    // },5000)
}

function getval() {
    let length = input2.value;

    if(length > 40){
        alert("Password length more than 40 not allowed")
        return;
    }
    let password = generatePass(length);
    doThis(password);

    // console.log(upper);
    console.log(length);
    // console.log(check1.checked == true);
    // console.log(check2.checked == true);
    // console.log(check3.checked == true);
    // console.log(check4.checked == true);
}

function generatePass(length) {
    let common = [];
    let num = [0,1,2,3,4,5,6,7,8,9]
    let lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let upper = []
    for(let i=0;i<lower.length;i++){
        let u = lower[i].toUpperCase();
        upper.push(u);
    }
    let sym = ['!','@','#','$','%','^','&','*','(',')','_','.','~']
    if(check1.checked == true){
        for(let i=0;i<upper.length;i++) common.push(upper[i]);
    }
    if(check2.checked == true){
        for(let i=0;i<lower.length;i++) common.push(lower[i]);
    }
    if(check3.checked == true){
        for(let i=0;i<num.length;i++) common.push(num[i]);
    }
    if(check4.checked == true){
        for(let i=0;i<sym.length;i++) common.push(sym[i]);
    }

    let str = "";
    for(let i=0;i<length;i++){
        let n = Math.floor(Math.random() * common.length);
        str = str + common[n];
    }
    // for(let i=0;i<length;i++){
    //     if(i%)
    // }

    return str;
}

function dothat(password) {
    setTimeout(() => {
        //
    },10000)
    let txt = input1.value;
    navigator.clipboard.writeText(txt)
    alert("Password copied")
}

generate.addEventListener('click',getval)
cpy.addEventListener('click',dothat)

// console.log(val);