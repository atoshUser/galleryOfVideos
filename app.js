const item = document.querySelector(".item");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const listOfVideos = document.querySelector(".list-of-videos");
const trash = document.querySelectorAll(".trash");
let videosArray = document.querySelectorAll(".video");
let linksArray = [];
videosArray[0].controls = true;
videosArray[0].autoplay = true;
videosArray[0].muted = true;
videosArray[0].loop = true;
const addNewVideoBlogs = (link) => {
    let elVideo = document.createElement("video");
    let elSource = document.createElement("source");
    let elLi = document.createElement("li");
    let elTrash = document.createElement("span");
    elTrash.className = "fa-regular fa-trash-can trash";
    elLi.className = "item";
    elLi.append(elTrash);
    elVideo.className = "video";

    elSource.src = link;
    elVideo.append(elSource);
    elLi.append(elVideo);
    listOfVideos.append(elLi);

    videosArray = document.querySelectorAll(".video");
    videosArray.forEach((item) => {
        item.controls = true;
        item.autoplay = true;
        item.loop = true;
    });
};

btn.addEventListener("click", () => {
    let value = input.value;
    let check;
    input.value = "";
    check = linksArray.some((item) => {
        return item === value && true;
    });

    if (check) {
        alert("Bu video ro'yxatda bor");
    } else {
        linksArray.push(value);
        addNewVideoBlogs(value);
    }
});

listOfVideos.addEventListener("click", (e) => {
    let target = e.target;
    target.className.includes("trash") && target.parentElement.remove();
});
