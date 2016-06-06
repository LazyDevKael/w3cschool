
function changeParagraph() {
    var demo = document.getElementById("demo")
    // Change paragraph content
    demo.innerHTML = "This is changed paragraph content!"
}

function changeParagraphV2() {
    var demo = document.getElementById("demo")
    /* Now we have abstract a HTML component into a variable "demo"
    We can make changes to the innerHTML of this component, such as change its content    */
    demo.innerHTML = "This is a new paragraph!"
}

