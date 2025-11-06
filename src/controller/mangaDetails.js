
import { getData } from '../utils/services/api-calls.js';

const mangaDetails = async (req, res) => {

    const { id } = req.params;
    console.log('Params:', id);
    try {
        const queryParams = {
            variables: {"_id":`${id}`},
            extensions: {"persistedQuery":{"version":1,"sha256Hash":process.env.MANGA_DETAILS}}
            
          };
          const response = await getData(queryParams, {}, {});
          return res.status(200).json({data: response?.data});
    } catch (error) {
      return res.status(500).json({message: 'Failure in Manga List.js'});
    }
};

export { mangaDetails };
