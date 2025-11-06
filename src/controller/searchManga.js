import { getData } from '../utils/services/api-calls.js';

import { AnimeList } from '../models/AnimeDetailsModel.js';

function createDetailsFromJson(data){
 
    if (!Array.isArray(data)) {
      throw new Error("Expected an array of objects");
    }
  const dataArray = []
  data.map((item) => {
    let passData = new AnimeList(
      item._id, 
      item.englishName, 
      item.nativeName, 
      item.thumbnail, 
      item.score, 
      item.airedStart,
      item.lastEpisodeDate,
      item.pageStatus
    )
    dataArray.push(passData.toJSON())
  });
  
  return {
    total : data.total,
    dataArray,};
  }
  
const searchManga = async (req, res) => {
    const { search } = req.params;
    const { pageNo } = req.params;
    console.log('Params:', search);
    try {
        const queryParams = {
            variables: {
                "search":{
                    "query":`${search}`,
                    "isManga":true
                },
                "limit":26,
                "page":1,
                "translationType":"sub",
                "countryOrigin":"JP"
            },
            extensions: {
                
                "persistedQuery":{
                    "version":1,
                    "sha256Hash":process.env.MANGA_SEARCH
                }
            }
        };
        const response = await getData(queryParams, {}, {});
        const details = createDetailsFromJson(response?.data?.mangas?.edges );
        return res.status(200).json({ data : response});
    } catch (error) {
        return res.status(500).json({ message: `${error} Failure in Manga Pages.js `});
    }
};

export { searchManga };
