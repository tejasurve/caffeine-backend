import { User } from '../models/user-models.js';
import { AnimeList } from '../models/AnimeDetailsModel.js';
function createDetailsFromJson(data){
    console.log("data:",data)
const deatails = new AnimeList(data._id, data.name, data.englishName, data.nativeName, data.thumbnail, data.score ,data.airedStart);
return deatails;
}
//Registration

const demo = async (req, res) => {
    try {
        const data ={
            "anyCard" : {
                "_id": "RLGWWCCcPezahmWzG",
                "name": "Hazurewaku no \"Joutai Ijou Skill\" de Saikyou ni Natta Ore ga Subete wo Juurin suru made",
                "englishName": "Failure Frame: I Became the Strongest and Annihilated Everything With Low-Level Spells",
                "nativeName": "ハズレ枠の【状態異常スキル】で最強になった俺がすべてを蹂躙するまで",
                "thumbnail": "mcovers/m_tbs/Dc9Dag33wq7qirfiq/010.jpg",
                "airedStart": {
                    "year": 2019,
                    "month": 6,
                    "date": 26
                },
                "slugTime": null,
                "availableEpisodes": null,
                "score": 6.67,
                "lastEpisodeDate": null,
                "lastChapterDate": {
                    "sub": {
                        "year": 2024,
                        "month": 5,
                        "date": 26,
                        "minute": 6,
                        "hour": 17
                    },
                    "raw": {
                        "hour": 20,
                        "minute": 42,
                        "year": 2021,
                        "month": 10,
                        "date": 8
                    }
                },
                "availableChapters": {
                    "sub": 72,
                    "raw": 30
                }
            },
            "pageStatus": {
                "_id": "60b2f1c60d40b89d72a03f86",
                "views": "113301",
                "showId": "manga@RLGWWCCcPezahmWzG",
                "rangeViews": "1561",
                "isManga": true
            }
        }
    
        const deatails = createDetailsFromJson(data.anyCard); 
    
        return res.status(200).json({data: deatails});
    
    } catch (error) {
        return res.status(500).json({message: 'Failure in demo.js'});
    }


}



export {demo}