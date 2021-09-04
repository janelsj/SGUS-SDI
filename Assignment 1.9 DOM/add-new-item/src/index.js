const item2 = document.createElement("li");
item2.innerText = "Item 2";
item2.style.backgroundColor = "red";

const item3 = document.createElement("li");
item3.innerText = "Item 3";
item3.style.backgroundColor = "blue";

document.querySelector("#target").append(item2, item3);

const video = document.createElement("iframe");
video.src = "https://www.youtube.com/embed/y17RuWkWdn8";
video.width = 500;
video.height = 350;
document.body.append(video);