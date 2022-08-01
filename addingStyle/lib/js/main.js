let rightbg = document.querySelector(".right_side");
rightbg.style["background-color"] = "#d3c26f";

let classname = document.querySelectorAll(".name");
for ( let i = 0; i < classname.length; i++){
    classname[i].style["text-shadow"] = "-6px 5px yellow";
    classname[i].style["blur-radius"] = "2px";
}
