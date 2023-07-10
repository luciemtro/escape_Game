/* récupération données rooms.json */


fetch("../json/rooms.json")
    .then(response => response.json())
    .then(json => {
        createRooms(json); // appel createRooms une fois les données récupérer
    });

let section = document.getElementById("rooms_rooms");

function createRooms(json) {

    for(let room of json) { // pour chaque room du .json

        // console.log(room['name']);

        // creation contener
        let contener = document.createElement('a');
        contener.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)),url("' + room["photos"][0] +'")';
        contener.href = "../pages/room.html?name=" + room['name'];
        contener.style.textDecoration = 'none';
        contener.style.backgroundPosition = 'center';
        contener.style.backgroundSize = 'cover';
        contener.className = 'room_card' + ' all ';  // 2 = easy , 3 = normal , 4 = hard.

        switch (room['difficulty']){
            case 1:
                contener.className += 'easy';
                break;
            case 2:
                contener.className += 'easy';
                break;
            case 3:
                contener.className += 'normal';
                break;
            case 4:
                contener.className += 'hard';
                break;
            case 5:
                contener.className += 'hard';
                break;

        }


        // creation difficulty
        let difficulty = document.createElement('div');
        difficulty.className = "room_card_difficulty";
        while (difficulty.children.length < 5) {
            let lock = document.createElement('i');
            lock.className = "fa-solid fa-lock";
            if (difficulty.children.length < room['difficulty']){
                lock.style.color = '#F60B0E';
            }
            difficulty.append(lock);
        }
        contener.append(difficulty);

        // creation name
        let name = document.createElement('p');
        name.className = 'room_card_name';
        name.innerText = room['name'];
        name.style.color = 'white';
        contener.append(name);

        //creation infos
        let infos = document.createElement('div');
        infos.className = "room_card_infos";
        infos.style.color = 'white';

        let groupDiv = document.createElement('div');
        let groupIcon = document.createElement('i');
        groupIcon.className = "fa-solid fa-user-group";
        let groupP = document.createElement('p');
        groupP.innerText = room['players'][0] + "-" + room['players'][1];
        groupDiv.append(groupIcon,groupP);

        let timeDiv = document.createElement('div');
        let timeIcon = document.createElement('i');
        timeIcon.className = "fa-regular fa-clock";
        let timeP = document.createElement('p');
        timeP.innerText = room['minutes'];
        timeDiv.append(timeIcon,timeP);

        let locationDiv = document.createElement('div');
        let locationIcon = document.createElement('i');
        locationIcon.className = "fa-solid fa-location-dot";
        let locationP = document.createElement('p');
        locationP.innerText = room['location'];
        locationDiv.append(locationIcon,locationP);

        infos.append(groupDiv,timeDiv,locationDiv);

        contener.append(infos);

        section.append(contener);

    }
}



/****************** TRIS ***********************/


let tris = document.getElementsByTagName("input");

for(let input of tris){
    input.addEventListener('change', e=>{
        for(let checkbox of tris){
            if(checkbox.checked){
                checkbox.checked = false;
            }
        }
        input.checked = true;
    });
}


/****************  insert footer nav ********************/
import {nav} from "../js/topNav.js";

addNav();
async function addNav() {
    const resp = await fetch("topNav.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
    //document.getElementsByTagName('header')[0].insertAdjacentHTML("afterbegin", html);

    nav();
}

addFooter();
async function addFooter() {
    const resp = await fetch("footer.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}



