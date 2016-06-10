function getProduct(a, b) {
    return a * b
}

function getString() {
    var car = "Fiat"
    return car
}

function getFiatCar() {
    var car = {type:"Fiat", model:"500", color:"White"}
    return car
}

function getJohnPerson() {
    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
    return person
}

function getJohnPersonName() {
    var person = {firstName:"John", lastName:"Liu", age:25, eyeColor:"black"}
    return person.firstName + " " + person.lastName
}

function getJohnPersonAge() {
    var person = {firstName:"John", lastName:"Liu", age:25, eyeColor:"black"}
    return person["age"]
}

function getKaelSpeak() {
    var kael = {
	firstName: "Kael",
	lastName: "Xu",
	id: "25044672",
	speak: function() {
	    return "Hello, world"
	}
    }

}

function displayName() {
    var person = {
	firstName: "Kael",
	lastName: "Xu"
    }

    document.getElementById("demo").innerHTML = person.firstName
}























