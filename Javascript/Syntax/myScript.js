
function calculateSum() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var result = document.getElementById("result")

    if (!num1 || !num2)
	window.alert("Invalid input!")
    else
	result.innerHTML = num1 + num2

}

function changeMyPar() {
    var myPar = document.getElementById("myPar")
    var myDiv = document.getElementById("myDiv")
    myPar.innerHTML = "This is a changed version of paragraph"
    myDiv.innerHTML = "This is a change version of Div"
}

