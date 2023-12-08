async function GetCheckin(){
    const response = await fetch('/auth/get-checkin')
    const data = await response.json();
    console.log(data)
    populateTable(data)
}


function populateTable(Checkin){
    const table = document.getElementById('table')

    for (let i = 0; i < Checkin.length; i++) {
        const checkin = Checkin[i];

        const row = document.createElement('tr')
        
        const Semester = document.createElement('td')
        Semester.innerText = checkin.Semester;

        const RoomNumber = document.createElement('td')
        RoomNumber.innerText = checkin.RoomNumber;

        const Name = document.createElement('td')
        Name.innerText = checkin.Name;

        const Email = document.createElement('td')
        Email.innerText = checkin.Email;

        const IDNumber = document.createElement('td')
        IDNumber.innerText = checkin.IDNumber;

        const PhoneNumber = document.createElement('td')
        PhoneNumber.innerText = checkin.PhoneNumber;

        const Bed = document.createElement('td')
        Bed.innerText = checkin.Bed;

        const StudyDesk = document.createElement('td')
        StudyDesk.innerText = checkin.StudyDesk;

        const Other = document.createElement('td')
        Other.innerText = checkin.Other;

        const Checkin_Date = document.createElement('td')
        Checkin_Date.innerText = checkin.Checkin_Date;

        const IssuedKey = document.createElement('td')
        IssuedKey.innerText = checkin.IssuedKey;

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', () => editCheckin(checkin.ID)); // Assuming ID is a unique identifier

 



        row.appendChild(Semester)
        row.appendChild(RoomNumber)
        row.appendChild(Name)
        row.appendChild(Email)
        row.appendChild(IDNumber);
        row.appendChild(PhoneNumber);
        row.appendChild(Bed)
        row.appendChild(StudyDesk)
        row.appendChild(Other)
        row.appendChild(Checkin_Date)
        row.appendChild(IssuedKey)



        table.appendChild(row)
    }
}

GetCheckin()

