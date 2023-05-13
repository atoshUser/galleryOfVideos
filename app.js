const item = document.querySelector(".item");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const listOfVideos = document.querySelector(".list-of-videos");
let videosArray = document.querySelectorAll(".video");
videosArray[0].autoplay = true;
videosArray[0].controls = true;
videosArray[0].loop = true;
const addNewVideoBlogs = (link) => {
    let elVideo = document.createElement("video");
    let elSource = document.createElement("source");
    let elLi = document.createElement("li");
    elLi.className = "item";
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
    input.value = "";
    addNewVideoBlogs(value);
});
