class Contact{

    constructor(...params){        
        this.firstName = params[0];        
        this.lastName = params[1];        
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.emailId = params[7];
    }

    get firstName(){ return this._firstName}
    set firstName(firstName){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(firstName))
            this._firstName = firstName
        else throw "Incorrect First Name"
    }
    get lastName(){ return this._lastName}
    set lastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(lastName))
            this._lastName = lastName
        else throw "Incorrect Last Name"
    }
    get address(){ return this._address}
    set address(address){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(address))
            this._address = address
        else throw "Invalid Address"
    }
    get city(){ return this._city}
    set city(city){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(city))
            this._city = city
        else throw "Invalid City Name"
    }
    get state(){ return this._state}
    set state(state){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(state))
            this._state = state
        else throw "Invalid State Name"
    }
    get zip(){ return this._zip}
    set zip(zip){
        let regex = RegExp('^[0-9]{3}[\\s]{0,1}[0-9]{3}$')
        if(regex.test(zip)){
            this._zip = zip
        }
        else throw "Invalid Zip"
    }
    get phoneNo(){ return this._phoneNo}
    set phoneNo(phoneNo){
        let regex = RegExp('[0-9]{2}\\s[0-9]{10}')
        if(regex.test(phoneNo))
            this._phoneNo = phoneNo
        else throw "Invalid Phone Number"
    }
    get emailId(){ return this._emailId}
    set emailId(emailId){
        let regex = RegExp('^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$')
        if(regex.test(emailId))
            this._emailId = emailId
        else throw "Invalid EmailId"
    }


    toString(){
        return "FirstName: " + this.firstName + " LastName: " + this.lastName + " Address: " + this.address + " City: " + this.city +
            " State: " + this.state + " Zip: " + this.zip + " PhoneNumber: " + this.phoneNo + " Email: " + this.emailId;
  }
}

let contact = new Contact("Akhil", "Kumar", "RKColony", "Mahabubnagr", "Telangana", "512541", "91 9876543210", "akhil@gmail.com")
let contact1 = new Contact("Nikhil", "Maya", "BNReddy", "Trichy", "TamilNadu", "525151", "91 8523697410", "nikhil@gmail.com")
let contact2 = new Contact("Raju", "Singh", "Balajinagar", "Karminagar", "Telangana", "596321", "91 9632581470", "raj@gmail.com")
let contact3 = new Contact("Raju", "Singh", "Balajinagar", "Karminagar", "Telangana", "596321", "91 9632581470", "raj@gmail.com")

var addressBookArray = new Array()

function findContact(fname, lname){
    let contact;
    for(let i = 0; i < addressBookArray.length; i++){
        if(addressBookArray[i].firstName === fname && addressBookArray[i].lastName === lname)
            contact = addressBookArray[i]
    }
    return contact;
}

function addContactToArray(contact){
    let duplicateContact = findContact(contact.firstName, contact.lastName)
    if(duplicateContact != null)
        console.log("Dupicate Contact Found.")
    else
        addressBookArray.push(contact)
}

addContactToArray(contact3)
addContactToArray(contact2)
addContactToArray(contact)
addContactToArray(contact1)


for(let i = 0; i < addressBookArray.length; i++){
    console.log(addressBookArray[i].toString())
}

function editContact(firstname, lastname){
    let contactToEdit;
    for(let i = 0; i < addressBookArray.length; i++){
        if(addressBookArray[i].firstName === firstname && addressBookArray[i].lastName === lastname)
            contactToEdit = addressBookArray[i]
    }

    if(contactToEdit == null)
        console.log("No Contact Found")
    else{
        let choice = 1;
        while(choice != 9){
            console.log("1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State \n6. Edit ZipCode \n7. Edit Phone Number \n8. Edit EmailId \n9. Exit")
            choice = prompt("Enter Your Choice:  ")
            choice = parseInt(choice)
            switch (choice) {
                case 1:
                    let firstname = prompt("Enter the first Name: ")
                    contactToEdit.firstName = firstname
                    break
                case 2:
                    let lastname = prompt("Enter the last Name: ")
                    contactToEdit.lastName = lastname
                    break
                case 3:
                    let address = prompt("Enter the address: ")
                    contactToEdit.address = address
                    break
                case 4:
                    let city = prompt("Enter the city: ")
                    contactToEdit.city = city
                    break
                case 5:
                    let state = prompt("Enter the State: ")
                    contactToEdit.state = state
                    break
                case 6:
                    let zip = prompt("Enter the zip: ")
                    contactToEdit.zip = zip
                    break
                case 7:
                    let phone = prompt("Enter the phone number: ")
                    contactToEdit.phoneNo = phone
                    break
                case 8:
                    let mail = prompt("Enter the emailId: ")
                    contactToEdit.emailId = mail
                    break
                case 9:
                    break
                default:
                    console.log("Wrong choice")
            }
        }
    }
}

function deleteContact(firstname1, lastname1){
    for(let i = 0; i < addressBookArray.length; i++){
        if(addressBookArray[i].firstName === firstname1 && addressBookArray[i].lastName === lastname1)
            addressBookArray.splice(i,1)
            console.log("Deleted Successfully")
    }
}

function count(num){
    return num + 1;
}

function searchContactByCity(firstName,city){
    let citySearch = addressBookArray.find(contact => contact.firstName == firstName && contact.city == city);
    if (citySearch == undefined){
            console.log(firstName + " does not exist");
    }else {console.log(citySearch.toString());}
}

function searchContactByState(firstName,state){
    let stateSearch = addressBookArray.find(contact => contact.firstName == firstName && contact.state == state);
    if (stateSearch == undefined){
            console.log(firstName + " does not exists");
    }else {console.log(stateSearch.toString());}
}

function viewByCity(city){
    addressBookArray.filter(contact => contact.city == city).forEach(contact => console.log(contact.toString()))
}

function viewByState(state){
    addressBookArray.filter(contact => contact.state == state).forEach(contact => console.log(contact.toString()))
}

function operations(){
    let choice = 1;
    while(choice != 15){
        console.log("1.View Contact\n2. Edit Contact \n3. Delete Contact\n4.Count\n5.Search by city\n6.Search by state")
        console.log("7.View by city\n8.view by state\n9.Count by city \n10.Count by state \n11.Sort by name")
        console.log("12.Sort by city\n13.Sort by state\n14.Sort by zip\n15.Exit")
        choice = prompt("Enter Your Choice:  ")
        choice = parseInt(choice)
        if(choice == 1){
            console.log(addressBookArray.toString())
        }
        if(choice == 2){
            let firstname = prompt("Enter the First Name:  ")
            let lastname = prompt("Enter the Last Name:  ")
            editContact(firstname, lastname)
        }
        if(choice == 3){
            console.log("Delete Contact ")
            let firstname1 = prompt("Enter the First Name : ")
            let lastName1 = prompt("Enter the Last Name :  ")
            deleteContact(firstname1, lastName1)
        }
        if(choice == 4){
            console.log("Total Number of Contacts: " + addressBookArray.reduce(count,0))
        }
        if(choice == 5){
            let city = prompt("Enter city name : ")
            let firstname = prompt("Enter the First Name : ")
            searchContactByCity(firstname,city)
        }
        if(choice == 6){
            let state = prompt("Enter state name : ")
            let firstname = prompt("Enter the First Name : ")
            searchContactByState(firstname,state)
        }
        if(choice == 7){
            let city = prompt("Enter city name : ")
            viewByCity(city);
        }
        if(choice == 8){
            let state = prompt("Enter state name : ")
            viewByState(state)
        }
        if(choice == 9){
            let city = prompt("Enter city name : ")
            var cityCount = addressBookArray.filter(contact => contact.city == city).reduce(count,0);
            console.log(cityCount);
        }
        if(choice == 10){
            let state = prompt("Enter city name : ")
            var stateCount = addressBookArray.filter(contact => contact.state == state).reduce(count,0);
            console.log(stateCount);
        }
        if(choice == 11){
            addressBookArray.sort();
            console.log(addressBookArray.toString())
        }
        if(choice == 12){
            console.log(addressBookArray.sort(function(contact1, contact2) { return contact1.city.localeCompare(contact2.city)}))
        }
        if(choice == 13){
            console.log(addressBookArray.sort(function(contact1, contact2) { return contact1.state.localeCompare(contact2.state)}))
        }
        if(choice == 14){
            console.log(addressBookArray.sort(function(contact1, contact2) { return contact1.zip.localeCompare(contact2.zip)}))
        }
    }
}

const prompt = require('prompt-sync')();
operations();


