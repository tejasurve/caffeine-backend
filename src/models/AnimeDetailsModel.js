class AnimeList {
    constructor(id, englishName, nativeName, thumbnail, score, airedStart, lastEpisodeDate, pageStatus){
        this.id = id;
        this.englishName = englishName;
        this.nativeName = nativeName;
        this.thumbnail = thumbnail;
        this.score = score;
        this.airedStart = airedStart;
        this.lastEpisodeDate = lastEpisodeDate;
        this.pageStatus = pageStatus;
    }
    toJSON() {
        return {
          id: this.id.toString(),
          name: this.name,
          englishName: this.englishName,
          nativeName: this.nativeName,
          thumbnail: this.thumbnail,
          score: this.score,
          airedStart: this.airedStart,
          lastEpisodeDate: this.lastEpisodeDate,
          pageStatus: this.pageStatus || {},
        };
      }
}

export { AnimeList };