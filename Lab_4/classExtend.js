class media{
    constructor (info){
        this.publishData = info.publishData;
        this.name = info.name;
    }
}

class Song extends media{
    constructor(SongData){
        super(SongData);
        this.artist = SongData.artist;
    }
}

const mySong = new Song({
    artist : "Queen",
    name : "Bohemian Rhapsody",
    publishData : 1975,
});

console.log(mySong);