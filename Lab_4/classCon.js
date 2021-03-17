class Song{
    constructor(title , artist){
        this.title = title;
        this.artist = artist;
    }

}

const mySong = new Song("Bohemain Rhapsoyd" , "Queen");
console.log(mySong.title);

const loveSong = new Song("Yesterday" , "Beatle");
console.log(loveSong.title);