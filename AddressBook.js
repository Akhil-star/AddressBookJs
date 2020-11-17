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
let contact1 = new Contact("Nikhil", "Kumar", "BNReddy", "Trichy", "TamilNadu", "525151", "91 8523697410", "nikhil@gmail.com")
let contact2 = new Contact("Raju", "Singh", "Balajinagar", "Karminagar", "Telangana", "596321", "91 9632581470", "raj@gmail.com")

var addressBookArray = new Array()
addressBookArray.push(contact)
addressBookArray.push(contact1)
addressBookArray.push(contact2)    

for(let i = 0; i < addressBookArray.length; i++){
    console.log(addressBookArray[i].toString())
}

