
import dotenv from 'dotenv';
import { getData } from '../utils/services/api-calls.js';
import { AnimeList } from '../models/AnimeDetailsModel.js';
function createDetailsFromJson(data){
 
  if (!Array.isArray(data.recommendations)) {
    throw new Error("Expected an array of objects");
  }
const dataArray = []
data.recommendations.map((item) => {
  let passData = new AnimeList(
    item.anyCard._id, 
    item.anyCard.englishName, 
    item.anyCard.nativeName, 
    item.anyCard.thumbnail, 
    item.anyCard.score, 
    item.anyCard.airedStart,
    item.anyCard.lastEpisodeDate,
    item.pageStatus
  )
  dataArray.push(passData.toJSON())
});

return {
  total : data.total,
  dataArray,};
}

const mangaList = async (req, res) => {
    try {
      const { pageNo } = req.params;
        const queryParams = {
            variables: {
              type: "manga",
              size: 20,
              dateRange: 1,
              page: parseInt(pageNo) || 1,
              allowAdult: true,
              allowUnknown: true
            },
            extensions: {
              persistedQuery: {
                version: 1,
                sha256Hash: "1fc9651b0d4c3b9dfd2fa6e1d50b8f4d11ce37f988c23b8ee20f82159f7c1147"
              }
            }
          };
          const response = await getData(queryParams, {}, {});
          const details = createDetailsFromJson(response?.data?.queryPopular);
        
          return res.status(200).send(response);
    } catch (error) {
      return res.status(500).json({message: 'Failure in Manga List.js'});
    }
};

export { mangaList };
