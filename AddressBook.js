class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    emailId;

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
}

let contact = new Contact("Akhil", "Kumar", "RKColony", "Mahabubnagr", "Telangana", 187277, 9876542110, "akhil@gmail.com")
console.log(contact)