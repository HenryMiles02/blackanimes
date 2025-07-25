const fetchApi = async (id) => {
  const result = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
  .then((res) => res.json())
  .then((data) => {
    return data;
  });

  return result;
}

  function loadAnime(result){
    const animeDetails = document.getElementById('anime-details');
    animeDetails.innerHTML = ` 
              <p><span>Nome:</span> ${result.data.title}.</p>
              <p><span>Episódio:</span> ${result.data.episodes}.</p>
              <p><span>Sinopse:</span> ${result.data.synopsis}.</p>
        `;
}

async function renderPlayer(){
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const anime = await fetchApi(id);

  loadAnime(anime)
}

renderPlayer()
// --- Para descrição ---


  /*fetch(`${API_URL}/anime/459/`)
    .then(response => response.json())
      

      // Preenche detalhes
      

}

// https://api.jikan.moe/v4/anime/%7Bid%7D/episodes/%7Bepisode%7D
        /*
        <li><strong>Sinopse:</strong> ${data.data.synopsis}
        </li>
        <li><strong>Tipo:</strong> ${data.data.type}</p>
        <li><strong>Episódios:</strong> ${data.data.episodes}</li>
        
if (document.body.contains(document.getElementById('video'))) {
  // Carrega lista de animes da API
  fetch(`${API_URL}/anime/3/episodes/4`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const animeList = document.getElementById('anime-list');
      data.data.forEach(anime => {
        const card = document.createElement('div');
        card.classList.add('card');
        // Add content to the card (e.g., anime title, image, etc.)
        card.innerHTML = `
          <h3>${anime.title}</h3>
          <img src="${anime.image_url}" alt="${anime.title}">
        `;
        animeList.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching anime data:', error));
}*/


let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.video-container video');
let title = document.querySelector('.video-container .title');

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});