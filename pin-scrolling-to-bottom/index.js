const scroller = document.querySelector("#scroller");
const anchor = document.querySelector("#anchor");

const lyrics = [
    "I've got dreams... of finding out what all of this is for",
    "The punchline before they have told the joke",
    "Go run in the ferrari",
    "I'm not sorry, I'm dirty",
    "1-4-3, I love you!",
    "My bicycle rode so smooth, under the clouds, over the stars, all of you can eat my dust",
    "I grieve different",
    "So they shook",
    "Went from Angell Town Estates to a big estate, prolly woulda had a zombie on me if I woulda stayed",
    "And I've never been the one to go apologize, me I'd rather hit 'em up one more time",
    "Of course I do, I clearly do, yeah!",
    "Rover, rover, rover, I'm coming over, over, over",
    "Meet me in rendezvous",
    "Si-silver ride si-silver ride",
    "You are the fugitive, but you don't know what you're running from",
    "Another variation on a theme, a tangle on the television and the magazine",
    "Ain't nothing stopping the domino",
    "I can feel it in my bones",
    "When I'm afraid I'll lose my mind, it's fine it happens all the time",
    "Garrett, how would you describe your presence?",
    "Gottasadae",
    "I love when you talk with that attitude",
    "Hundred shots through the dark, you can never hit my heart!"
];

function randomLyric() {
    return lyrics[(Math.random() * lyrics.length) | 0];
  }

function appendChild(){
    let lyric = document.createElement('div');
    lyric.className = 'lyric';
    lyric.innerHTML = randomLyric();
    scroller.insertBefore(lyric, anchor);
}

setInterval(appendChild, 500)