// clases (.example) and ids (#example)
let movieListContainer = document.querySelector(".movie-list-wrapper");
let favSongsContainer = document.querySelector(".favsong");
let reproductorContainer = document.querySelector(".reproductormainadentro");


//MANEJO DEL DOM


// ALBUMS
class Album {
  //pasar propiedades
  constructor(title, artist, image) {
    //crear propiedades
    this.title = title;
    this.artist = artist;
    this.image = image;
  }
}

// SONG
class Song {
  //pasar propiedades
  constructor(title, artist, image) {
    //crear propiedades
    this.title = title;
    this.artist = artist;
    this.image = image;
  }
}

// array, listas, vectores de albunes

let albums = [
  new Album(
    "Happier Than Ever",
    "Billie Eilisht",
    "https://media.revistagq.com/photos/608a6889235a5910299c8f00/master/pass/Billie%20Eilish_cover%20album%20Happier%20Than%20Ever.jpg"
  ),
  new Album(
    "Harry's House",
    "Harry Styles",
    "https://cdn.smehost.net/sonymusiccomco-45pressprod/wp-content/uploads/2022/03/harrynew.png"
  ),
  new Album(
    "Sweetner",
    "Ariana Grande",
    "https://cdn.shopify.com/s/files/1/0516/0065/4493/products/602567838098_Ariana_Grande_Sweetener_A_1024x.png?v=1629729388"
  ),
  new Album(
    "Sour",
    "Olivia Rodrigo",
    "https://www.lahiguera.net/musicalia/artistas/olivia_rodrigo/disco/11184/olivia_rodrigo_sour-portada.jpg"
  ),
  new Album(
    "Midnights",
    "Taylor Swift",
    "https://static.stereogum.com/uploads/2022/08/taylor-swift-midnights-1661745792-1000x1000.jpeg"
  ),
  new Album(
    "1989",
    "Taylor Swift",
    "https://pyxis.nymag.com/v1/imgs/5a1/58c/580de90bf142c7660dcbaf8faa789a61b1-20-taylor-swift-1989.2x.w710.png"
  ),
  new Album(
    "The Dark Side Of The Moon",
    "Pink Floyd",
    "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
  ),
  new Album(
    "Abbey Road",
    "The Beatles",
    "https://images.radiox.co.uk/images/67203?crop=16_9&width=660&relax=1&signature=55LkrqcNZrAY4toJIVC2ULMZ_AU="
  ),
  new Album(
    "25",
    "Adele",
    "https://upload.wikimedia.org/wikipedia/en/9/96/Adele_-_25_%28Official_Album_Cover%29.png"
  ),
  new Album(
    "Take me home",
    "One Direction",
    "https://i.scdn.co/image/ab67616d0000b273ddacff8ec2f8f34ed56957cf"
  ),
  new Album(
    "Prism",
    "Katy Perry",
    "https://upload.wikimedia.org/wikipedia/en/b/b7/Katy_Perry_-_Prism_cover.png"
  ),
  new Album(
    "Anti",
    "Rihanna",
    "https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png"
  ),
  new Album(
    "Heartbreak Weather",
    "Niall Horan",
    "https://upload.wikimedia.org/wikipedia/en/2/2e/Niall_Horan_-_Heartbreak_Weather.png"
  ),
  new Album(
    "My Mind & Me ",
    "Selena Gomez",
    "https://i.scdn.co/image/ab67616d0000b273781904f69fd550c19e6e3b55"
  ),
  new Album(
    "El Madrileño",
    "C. Tangana",
    "https://cdns-images.dzcdn.net/images/cover/d1833fd04e46b042583fb0b67ca66013/500x500.jpg"
  ),
  //completar mas albunes
];

// array, listas, vectores de canciones

let songs = [
  new Song(
    "Medicine",
    "Havelin",
    "https://i1.sndcdn.com/artworks-3VjYtEu1uoIh-0-t500x500.jpg"
  ),
  new Song(
    "Star",
    "Selena Gomez",
    "https://www.lololyrics.com/img/cover/23935.jpeg"
  ),
  new Song(
    "Amapola",
    "Leo Rizzi",
    "https://i.scdn.co/image/ab67616d0000b27318330837f8c498291c4b44b7"
  ),
  new Song(
    "Chandelie",
    "Sia",
    "http://cdn.shopify.com/s/files/1/0385/1232/8844/products/CDSia-ThisIsActing1_1024x.jpg?v=1631984663"
  ),

  //completar mas objetos
];

//recorrer un array

for (let index = 0; index < albums.length; index++) {
  let element = `
        <div class="movie-list-item">
              <img class="movie-list-item-img" src="${albums[index].image}" alt="">
              <h1>${albums[index].title}</h1>
              <p>${albums[index].artist}</p>
          </div>`;

  movieListContainer.innerHTML += element;
}

for (let index = 0; index < songs.length; index++) {
  let element = `
          <li class="songitem">
                    <div class="izquierda">
                        <img src="${songs[index].image}" alt="">
                        <h5>${songs[index].title}<br> 
                            <div class="subtittle">${songs[index].artist}</div>
                        </h5>
                    </div>
                    <div class="derecha">
                        <span class="material-symbols-rounded" id="1">
                            favorite
                        </span>
                    </div>
          </li>
          `;

  favSongsContainer.innerHTML += element;
}

let elementReproductor = new Song(
  "Fine Line",
  "Harry Styles",
  "https://i.pinimg.com/originals/ec/5d/0a/ec5d0a4fcb33ce271bb272f0fc9a9417.jpg"
);

let elementReproductorHtml = `            
<a href="#" class="fineline"
><img
  class="fineline"
  width="190px"
  src="${elementReproductor.image}"
/></a>
<h1>${elementReproductor.title}</h1>
<p>${elementReproductor.artist}</p>

<div class="progresscontainerbottom">
<div class="progressbarbottom">
  <div class="progressbottom"></div>
</div>
</div>

<!-- start of player controls -->
<div class="playercontrols">
<div class="aleatorio">
  <span class="material-symbols-rounded"> shuffle </span>
</div>

<div class="anterior">
  <span class="material-symbols-rounded"> skip_previous </span>
</div>

<div class="play">
  <span class="material-symbols-rounded"> play_arrow </span>
</div>

<div class="siguiente">
  <span class="material-symbols-rounded"> skip_next </span>
</div>

<div class="repetir">
  <span class="material-symbols-rounded"> replay </span>
</div>
</div>
</div>`;

reproductorContainer.innerHTML = elementReproductorHtml;
