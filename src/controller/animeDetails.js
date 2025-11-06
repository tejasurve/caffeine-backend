import { getData } from '../utils/services/api-calls.js';

const getAnimeDetails = async (req, res) => {
    const { showId } = req.params;
    const { episodeString } = req.params;
    // const {translationType} = req.params || "sub";
    console.log('Params:', showId);
    console.log('Params:', episodeString);
    // console.log('Params:', translationType);
    try {
        const queryParams = {
            variables: { 
                "showId": showId, 
                "translationType":  "sub", 
                "episodeString": episodeString !== undefined ? episodeString : "1", },
            extensions: {
                 "persistedQuery": { 
                    "version": 1,
                    "sha256Hash": process.env.ANIME_DETAILS 
                } 
            }
        };
        const response = await getData(queryParams, {}, {});
        return res.status(200).json({ data: response?.data });
    } catch (error) {
        console.log('Error:', error);
        return res.status(500).json({ message: 'Failure in AnimeDetails.js' });
    }
};

export { getAnimeDetails };
