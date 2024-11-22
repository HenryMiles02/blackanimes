let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.video-container video');
let title = document.querySelector('.video-container title');

listVideo.forEach(video =>{
    video.omclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
        };
    };
});