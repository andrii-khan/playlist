;(function () {
    var playList = [{
            author: "led zeppelin",
            song: "stairway to heaven",
            duration: "2:03",
            play: "http://muzlishko.ru/files/17599587b93b56/play.mp3"
        },
        {
            author: "queen",
            song: "bohemian rhapsody",
            duration: "2:30"
        },
        {
            author: "lynyrd skynyrd",
            song: "free bird",
            duration: "1:56"
        },
        {
            author: "deep purple",
            song: "smoke on the water",
            duration: "3:03"
        },
        {
            author: "jimi hendrix",
            song: "all along the watchtower",
            duration: "2:53"
        },
        {
            author: "AC/DC",
            song: "back in black",
            duration: "2:43"
        },
        {
            author: "queen",
            song: "we will rock you",
            duration: "2:13"
        },
        {
            author: "metallica",
            song: "enter sandman",
            duration: "3:03"
        }
    ];

    const playsList = document.querySelector('.ba-playlist__list');
    const songList = document.getElementById('song-tmpl').innerHTML;    
    let songHTML = '';
    playsList.innerHTML = '';
    playList.forEach(function (song) {        
        songHTML = songList
            .replace(/{{name}}/ig, song.song)
            .replace(/{{time}}/ig, song.duration)
            .replace(/{{author}}/ig, song.author);
        playsList.innerHTML += songHTML;
    });

})();