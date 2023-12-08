async function GetCheckout(){
    const response = await fetch('/auth/get-checkout')
    const data = await response.json();
    console.log(data)
    populateTable(data)
}


function populateTable(Checkout){
    const table = document.getElementById('table')

    for (let i = 0; i < Checkout.length; i++) {
        const checkout = Checkout[i];

        const row = document.createElement('tr')
        
        const Semester = document.createElement('td')
        Semester.innerText = checkout.Semester;

        const RoomNumber = document.createElement('td')
        RoomNumber.innerText = checkout.RoomNumber;

        const Name = document.createElement('td')
        Name.innerText = checkout.Name;

        const Email = document.createElement('td')
        Email.innerText = checkout.Email;

        const IDNumber = document.createElement('td')
        IDNumber.innerText = checkout.IDNumber;

        const PhoneNumber = document.createElement('td')
        PhoneNumber.innerText = checkout.PhoneNumber;

        const Bed = document.createElement('td')
        Bed.innerText = checkout.Bed;

        const StudyDesk = document.createElement('td')
        StudyDesk.innerText = checkout.StudyDesk;

        const Other = document.createElement('td')
        Other.innerText = checkout.Other;

        const Checkout_Date = document.createElement('td')
        Checkout_Date.innerText = checkout.Checkout_Date;

        const Key_Returned = document.createElement('td')
        Key_Returned.innerText = checkout.Key_Returned;


        row.appendChild(Semester)
        row.appendChild(RoomNumber)
        row.appendChild(Name)
        row.appendChild(Email)
        row.appendChild(IDNumber);
        row.appendChild(PhoneNumber);
        row.appendChild(Bed)
        row.appendChild(StudyDesk)
        row.appendChild(Other)
        row.appendChild(Checkout_Date)
        row.appendChild(Key_Returned)


        table.appendChild(row)
    }
}

GetCheckout()
