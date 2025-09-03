let contact = [
    {
        name : "Akash1",
        phone : 1234567890,
        email : "akash1@gmail.com",

        displayInfo(){
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }

    },
    {
        name : "Akash2",
        phone : 9087654432,
        email : "akash2@gmail.com",

        displayInfo(){
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }

    }
];

const {name, phone, email} = contact[0];
console.log(`(Destructured) ${name} , ${phone} , ${email}`);

console.log(contact.name);
console.log(contact["phone"]);

contact.forEach(contact => contact.displayInfo());


function addContacts(...newContacts) {
    contacts.push(...newContacts);
}

addContacts(
    {
        name: "Akash3",
        phone: 9876543210,
        email: "akash3@gmail.com",
        displayInfo() {
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }
    },
    {
        name: "Akash4",
        phone: 8765432109,
        email: "akash4@gmail.com",
        displayInfo() {
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }
    }
);

contacts.forEach(contact => contact.displayInfo());

let moreContacts1 = [
    {
        name: "Akash5",
        phone: 7654321098,
        email: "akash5@gmail.com",
        displayInfo() {
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }
    }
];

let moreContacts2 = [
    {
        name: "Akash6",
        phone: 6543210987,
        email: "akash6@gmail.com",
        displayInfo() {
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }
    }
];

contacts = [...contacts, ...moreContacts1, ...moreContacts2];

console.log("\nAll Contacts:");
contacts.forEach(contact => contact.displayInfo());

function showContactInfo(city, country) {
    console.log(`Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}, Location: ${city}, ${country}`);
}

// call()
console.log("\nUsing call():");
showContactInfo.call(contacts[0], "New York", "USA");

// apply()
console.log("\nUsing apply():");
showContactInfo.apply(contacts[1], ["London", "UK"]);

// bind()
console.log("\nUsing bind():");
let boundShow = showContactInfo.bind(contacts[2], "Paris", "France");
boundShow();
