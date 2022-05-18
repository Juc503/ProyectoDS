let singers = [];



function fetchSinger(N){
    fetch('./api/characters.json')
        .then(response => response.json())
        .then(singers => singers.forEach(renderSinger))
}





const renderSinger= (element) => {

const card= document.querySelector(".card");

const quote= document.createElement("div");
quote.classList.add("points","center");
quote.innerHTML = element.quote;

card.appendChild(quote);

    const usercard= document.querySelector(".user-card");

    const levelcenter= document.createElement("div");
    levelcenter.classList.add("level","center");
    levelcenter.innerHTML = element.name;
    
    const pointscenter= document.createElement("div");
    pointscenter.classList.add("points","center");
    pointscenter.innerHTML = element.dateOfBirth;

    const photo= document.createElement("div");
    photo.classList.add("center");
    photo.innerHTML = element.image;
    
    usercard.appendChild(levelcenter);
    usercard.appendChild(pointscenter);
    usercard.appendChild(photo);

    
    const moreinfo= document.querySelector(".more-info")
    
    const nationality= document.createElement("div");
    nationality.classList.add("coords");
    nationality.innerHTML = element.nationality;
    
    moreinfo.appendChild(nationality);
    
    const insidestatsgrammys= document.querySelector("#insidestatsgrammys");
    
    const grammy =document.createElement("div");
    grammy.classList.add("title");
    insidestatsgrammys.appendChild(grammy);
    
    const nogrammy =document.createElement("div");
    nogrammy.classList.add("value");
    insidestatsgrammys.appendChild(nogrammy);
    
    const insidestatsalbum= document.querySelector("#insidestatsalbum");
    
    const LatestAlbum =document.createElement("div");
    LatestAlbum.classList.add("title");
    LatestAlbum.innerHTML = element.album;
    insidestatsalbum.appendChild(LatestAlbum);
    
    const AlbumName =document.createElement("div");
    AlbumName.classList.add("value");
    insidestatsalbum.appendChild(AlbumName);    

};

fetchSinger();