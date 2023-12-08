async function getRooms(){
    const response = await fetch('/auth/get-rooms')
    const data = await response.json();
    console.log(data)
    populateSelect(data)
    populateTable(data)
}


function populateTable(Rooms){
    const table = document.getElementById('table')

    for (let i = 0; i < Rooms.length; i++) {
        const room = Rooms[i];

        const row = document.createElement('tr')
        
        const roomNumber = document.createElement('td')
        roomNumber.innerText = room.RoomNumber;

        const spaces = document.createElement('td')
        spaces.innerText = room.Spaces;

        const Wing = document.createElement('td')
        Wing.innerText = room.Wing;

        const Gender = document.createElement('td')
        Gender.innerText = room.Gender;

        const Floor = document.createElement('td')
        Floor.innerText = room.Floor

        const Students = document.createElement('td')
        const studentArray = JSON.parse(room.Students)
        console.log(studentArray)
        Students.innerText = studentArray.join(',')

        row.appendChild(roomNumber)
        row.appendChild(spaces)
        row.appendChild(Wing)
        row.appendChild(Floor)
        row.appendChild(Gender)
        row.appendChild(Students)


        table.appendChild(row)
    }
}

getRooms()

function populateSelect(options){
    const roomsSelect = document.getElementById('select-rooms')
    for (let i = 0; i < options.length; i++) {
        const room = options[i];
        const option = document.createElement('option')
        option.value = `${room.RoomNumber},${room.Spaces}`;
        option.innerText = room.RoomNumber;
        option.setAttribute('space-available',room.Spaces)

        roomsSelect.appendChild(option)


    }
}

document.querySelector('form').addEventListener('submit',async e=>{
    e.preventDefault();
    console.log('Submiting')
    const id = document.getElementById('idNumber').value
    const room = document.getElementById('select-rooms').value
    console.log(room.split(','))

    const roomNumber = room.split(',')[0]
    const spaceAvailable = room.split(',')[1]

    if(spaceAvailable==0){
        alert('The room you are trying to input is already full')
    }

    const data = {
        id: id,
        roomNumber : roomNumber,
        newSpace : parseInt(spaceAvailable)-1
    }

    console.log(data)

    const response = await fetch('/auth/room-number',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })


})


