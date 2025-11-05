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
  
const searchAnime = async (req, res) => {
    const { search } = req.params;
    const { pageNo } = req.params;
    console.log('Params:', search);
    try {
        const queryParams = {
            variables: {
                "search":{
                    "query":`${search}`,
                },
                "limit":26,
                "page":1,
                "translationType":"sub",
                "countryOrigin":"JP"
            },
            extensions: {
                
                "persistedQuery":{
                    "version":1,
                    "sha256Hash":"06327bc10dd682e1ee7e07b6db9c16e9ad2fd56c1b769e47513128cd5c9fc77a"
                }
            }
        };
        const response = await getData(queryParams, {}, {});
        const details = createDetailsFromJson(response?.data?.shows?.edges );
        return res.status(200).json({ data : response.data});
    } catch (error) {
        return res.status(500).json({ message: `${error} Failure in searchAnime `});
    }
};

export { searchAnime };
