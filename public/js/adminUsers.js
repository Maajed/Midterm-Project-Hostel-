async function GetUsers(){
    const response = await fetch('/auth/get-users')
    const data = await response.json();
    console.log(data)
    populateTable(data)
}


function populateTable(Users){
    const table = document.getElementById('table')

    for (let i = 0; i < Users.length; i++) {
        const users = Users[i];

        const row = document.createElement('tr')
        
        const ID = document.createElement('td')
        ID.innerText = users.ID;

        const Name = document.createElement('td')
        Name.innerText = users.Name;

        const Email = document.createElement('td')
        Email.innerText = users.Email;
        

        const RoomNumber = document.createElement('td')
        RoomNumber.innerText = users.RoomNumber


        row.appendChild(ID)
        row.appendChild(Name)
        row.appendChild(Email)
        row.appendChild(RoomNumber)
        table.appendChild(row)
    }
}

GetUsers()
