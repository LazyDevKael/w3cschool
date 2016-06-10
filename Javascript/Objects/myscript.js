function displayFirstName() {
    var person = {
	firstName: "Kael",
	lastName: "Xu"
    }

    document.getElementById("demo").innerHTML = person.firstName
}

function displayCountry() {
	var person = {
		firstName: "Kael",
		lastName: "Xu",
		country: "USA"
	}

	document.getElementById("demo").innerHTML = person["country"]
}

function displayInfo() {
	var person = {
		name: "Kael",
		age: 22
	}

	document.getElementById("demo").innerHTML = person.name + " is " + person.age + " years old"
}


