const btn1 = document.getElementById("btn1");
const box = document.querySelector(".sub-container");


btn1.addEventListener("click", function(){

    // console.log(btn1.addEventListener);
   box.classList.add("sub-container2");
    btn1.classList.add("hidden")
   
});

const btn = document.querySelector(".btn");
const text_container = document.querySelector(".text-container");
const list = document.querySelector(".list");

btn.addEventListener("click", function(){
    let detail = text_container.value;
    console.log(detail);
     
    
    let li = document.createElement("li");
    let input = document.createElement("button");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("class", "checkbox");


    input.innerHTML = "x"

    
   
    li.innerHTML = detail;
    li.setAttribute("class","check");

    li.appendChild(checkbox);
    li.appendChild(input);
    list.appendChild(li);
    text_container.value = "";
    save();
});

    list.addEventListener("click", function(e){
        if (e.target.tagName == "BUTTON"){
            e.target.parentElement.remove();
            save();
        }

        if (e.target.tagName == "INPUT"){
            e.target.parentElement.classList.toggle("abb");
            save();
        }
    })

    function save() {
        localStorage.setItem("stored", list.innerHTML);
    }

    function restore() {
        list.innerHTML = localStorage.getItem("stored");
         
        let check = document.querySelectorAll(".check");
        // console.log(check);
        check.forEach(element => {
            if (element.classList.contains("abb")) {
                element.querySelector(".checkbox").checked = "true";
            }
        });
    }
    restore();

    


