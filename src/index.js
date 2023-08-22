import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

//boşluk tuşuyla sayfayı kaydırmayı iptal ettim.
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 32) {
    e.preventDefault();
  }
});

//kartlara efekt verildi.

const elements = document.querySelectorAll(".destination p");

elements.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    event.target.parentElement.style.cursor = "pointer";
    event.target.parentElement.style.boxShadow = "10px 20px 30px black";
    event.target.parentElement.style.padding = "3rem";
    event.target.parentElement.style.width = "35%";
    event.target.parentElement.style.background = "#FFEBCD";
  });
  item.addEventListener("mouseleave", (event) => {
    event.target.parentElement.style.cursor = "pointer";
    event.target.parentElement.style.boxShadow = "none";
    event.target.parentElement.style.padding = "0";
    event.target.parentElement.style.width = "30%";
    event.target.parentElement.style.background = "none";
  });
});

const body = document.querySelector("body");
const header = document.querySelector("header");

window.addEventListener("load", (e) => {
  body.style.backgroundColor = "rgba(120,140,120,0.5)";
  header.style.background = "#FFEBCD";
});

const img2 = document.getElementById("img2");
img2.addEventListener("dragstart", (ev) => {
  ev.dataTransfer.setData("Text", ev.target.id);
});

const p1 = document.getElementById("p1");
p1.addEventListener("drop", (ev) => {
  let data = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
  ev.preventDefault();
});

p1.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});
