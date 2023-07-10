

/****************  get name *******************************/
const postName = (new URLSearchParams(window.location.search)).get('name');

//set title
document.getElementsByTagName('h1')[0].innerText = postName;

let roomDatas;

let header = document.getElementById('room_header');

let posInitCarrousel = 0;
let jsonSize = 0;
let jsonFile;
setDynamic();


/* 1 seul élément dans le carrousel si sreen width <= 650px */
addEventListener("resize", (event) => {
    if(window.innerWidth <= 650){
        createOtherRooms(posInitCarrousel,1);
    }else{
        createOtherRooms(posInitCarrousel, 3);
    }
});

function setDynamic() {
    fetch("../json/rooms.json")
        .then(response => response.json())
        .then(json => {
            for (let room of json) { // pour chaque room du .json
                if (room['name'] === postName) {
                    roomDatas = room;
                    jsonSize = json.length;
                    jsonFile = json;
                    createDataRoom();
                    if(window.innerWidth <= 650){
                        createOtherRooms(posInitCarrousel,1);

                    }else {
                        createOtherRooms(posInitCarrousel, 3);
                    }
                }
            }

        });
}

/**************** creation datas room *******************/

function createDataRoom() {
    header.style.backgroundImage = 'linear-gradient(to bottom, rgb(27 27 27 / 0%), rgb(27 27 27)),url("' + roomDatas['photos'][0] + '")';


    // creation difficulty
    let datas_difficulty = document.getElementById('datas_difficulty');
    let difficulty = document.createElement('div');
    difficulty.className = "room_difficulty";
    while (difficulty.children.length < 5) {
        let lock = document.createElement('i');
        lock.className = "fa-solid fa-lock";
        if (difficulty.children.length < roomDatas['difficulty']) {
            lock.style.color = '#F60B0E';
        }
        difficulty.append(lock);
    }
    datas_difficulty.prepend(difficulty);


    // creation players

    let datas_players = document.getElementById('datas_players');
    let groupDiv = document.createElement('div');
    groupDiv.style.display = "flex";
    let groupIcon = document.createElement('i');
    groupIcon.className = "fa-solid fa-user-group";
    groupIcon.style.color = '#969696';
    let groupP = document.createElement('p');
    groupP.innerText = roomDatas['players'][0] + "-" + roomDatas['players'][1];
    groupDiv.append(groupIcon, groupP);

    datas_players.prepend(groupDiv);

    // creation time

    let datas_time = document.getElementById('datas_time');
    let timeDiv = document.createElement('div');
    timeDiv.style.display = 'flex';
    let timeIcon = document.createElement('i');
    timeIcon.className = "fa-regular fa-clock";
    timeIcon.style.color = '#969696';
    let timeP = document.createElement('p');
    timeP.innerText = roomDatas['minutes'];
    timeDiv.append(timeIcon, timeP);
    datas_time.prepend(timeDiv);
}



/**************** creation other rooms *******************/

function createOtherRooms(i,nbrRoom) {
    let other_rooms = document.getElementById('other_rooms');
        other_rooms.innerHTML = '';
    const MAX_ROOM = i + nbrRoom;

    for(i; i<jsonFile.length;i++) { // pour chaque room du .json

        if (i < MAX_ROOM) {
            // creation contener
            let contener = document.createElement('a');
            contener.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)),url("' + jsonFile[i]["photos"][0] + '")';
            contener.href = "../pages/room.html?name=" + jsonFile[i]['name'];
            contener.style.textDecoration = 'none';
            contener.style.backgroundPosition = 'center';
            contener.style.backgroundSize = 'cover';
            contener.className = 'room_card' + ' all ';  // 2 = easy , 3 = normal , 4 = hard.

            switch (jsonFile[i]['difficulty']) {
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
                if (difficulty.children.length < jsonFile[i]['difficulty']) {
                    lock.style.color = '#F60B0E';
                }
                difficulty.append(lock);
            }
            contener.append(difficulty);

            // creation name
            let name = document.createElement('p');
            name.className = 'room_card_name';
            name.innerText = jsonFile[i]['name'];
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
            groupP.innerText = jsonFile[i]['players'][0] + "-" + jsonFile[i]['players'][1];
            groupDiv.append(groupIcon, groupP);

            let timeDiv = document.createElement('div');
            let timeIcon = document.createElement('i');
            timeIcon.className = "fa-regular fa-clock";
            let timeP = document.createElement('p');
            timeP.innerText = jsonFile[i]['minutes'];
            timeDiv.append(timeIcon, timeP);

            let locationDiv = document.createElement('div');
            let locationIcon = document.createElement('i');
            locationIcon.className = "fa-solid fa-location-dot";
            let locationP = document.createElement('p');
            locationP.innerText = jsonFile[i]['location'];
            locationDiv.append(locationIcon, locationP);

            infos.append(groupDiv, timeDiv, locationDiv);

            contener.append(infos);

            other_rooms.append(contener);
        }
    }

}



/**************** Carousel ******************************/

let previous = document.getElementById('other_previous');
let next = document.getElementById('other_next');

previous.addEventListener('click', ()=>{

    if(window.innerWidth <= 650){
            if(posInitCarrousel > 0) {
                posInitCarrousel -= 1;
                createOtherRooms(posInitCarrousel, 1);
            }

        }else {
            if(posInitCarrousel > 0) {
                posInitCarrousel -= 1;
                createOtherRooms(posInitCarrousel, 3);
            }
        }

});

next.addEventListener('click', ()=>{

        if(window.innerWidth <= 650){
            if(posInitCarrousel < jsonSize-1) {
                posInitCarrousel += 1;
                createOtherRooms(posInitCarrousel, 1);
            }
        }else {
            if(posInitCarrousel < jsonSize -3) {
                posInitCarrousel += 1;
                createOtherRooms(posInitCarrousel, 3);
            }
        }

});


/****************  insert footer nav ********************/

import {nav} from "./topNav.js";

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

