// console.log("Hello World!");
// alert("Menampilkan Notifikasi");
// prompt("Kamu tanya? Bertanya-tanya?");

// const promnet = "Coding itu mudah bukan?"
// console.log(promnet);
// promnet = "Coding itu sangat begitu syuliit!!"
// console.log(promnet);

// let totalPoint = prompt("Aku");
// if (totalPoint > 100) {
//   document.write("<h1>Selamat!!</h1>");
// } else {
//   document.write("<h1>Nuhun</h1>");
// }

// let x = 6;
// let y = 3;

// var a = (x < 10 && y > 1);
// var b = (x < 10 && y < 1);
// var c = (x == 5 || y == 5);
// var d = (x == 6 || y == 5);
// var e = !(x == y);

// document.write(a)
// document.write(b)
// document.write(c)
// document.write(d)
// document.write(e)

let p = document.querySelector("p");
let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener('click', function() {
    let isi = input.value;
    console.log(isi);
    p.innerHTML = isi;
})


