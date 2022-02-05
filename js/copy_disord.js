//COPY DISCORD BUTTON
function copy_text(html_element) {
    if (!html_element) {
        return; 
    }

    let element_text = html_element.innerText;
    
    let input_element = document.createElement("input");
    input_element.setAttribute("value", element_text);
    document.body.appendChild(input_element);
    input_element.select();
    document.execCommand("copy");
    input_element.parentNode.removeChild(input_element);
    console.log(element_text);
};

function timeFunction() {
    setTimeout(function(){

    }, 250);
};
/* timeFunction(); */

function copied_animation(html_element, new_text) {
    if (!html_element) {
        return;
    }
    html_element.classList.add("mobile_hovered")
    html_element.innerText = new_text;
    setTimeout(function(){
        html_element.innerText = "Copy my Discord"
        html_element.classList.remove("mobile_hovered")
    }, 500);
}

const discord_text_qs = document.querySelector("#discord_text");
const discord_text_id = document.getElementById("copy_discord");

document.querySelector("#copy_discord").addEventListener("click", function() {
    copy_text(discord_text_qs);
    copied_animation(discord_text_id, "Copied!");
})
