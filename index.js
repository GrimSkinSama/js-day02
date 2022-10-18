const skills = ["HTML", "CSS", "JS"];

var title = document.querySelector("h3");
var skilld = document.querySelector("#skills");
title.innerHTML = '@anandahito';  





function test(){
    console.log(skills.length);
    

    for(let i = 0; i < skills.length ; i++){
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.innerHTML = skills[i];
        ul.appendChild(li);
        skilld.appendChild(ul);
    }
    
}