async function GetMaintenance(){
    const response = await fetch('/auth/get-maintenance')
    const data = await response.json();
    console.log(data)
    populateTable(data)
}


function populateTable(Maintenance){
    const table = document.getElementById('table')

    for (let i = 0; i < Maintenance.length; i++) {
        const maintenance = Maintenance[i];

        const row = document.createElement('tr')
        
        const Semester = document.createElement('td')
        Semester.innerText = maintenance.Semester;

        const Name = document.createElement('td')
        Name.innerText = maintenance.Name;

        const Email = document.createElement('td')
        Email.innerText = maintenance.Email;

        const RoomNumber = document.createElement('td')
        RoomNumber.innerText = maintenance.RoomNumber;

        const MaintenanceNeeds = document.createElement('td')
        MaintenanceNeeds.innerText = maintenance.MaintenanceNeeds


        row.appendChild(Semester)
        row.appendChild(Name)
        row.appendChild(Email)
        row.appendChild(RoomNumber)
        row.appendChild(MaintenanceNeeds)

        table.appendChild(row)
    }
}

GetMaintenance()
