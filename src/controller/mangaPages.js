import { getData } from '../utils/services/api-calls.js';

const getMangaPages = async (req, res) => {
    const { id } = req.params;
    const { chapterString } = req.params;
    console.log('Params:', id);
    console.log('Params:', chapterString);
    try {
        const queryParams = {
            variables: { 
                "mangaId": `${id}`, 
                "translationType": "sub", 
                "chapterString": chapterString !== undefined ? chapterString : "1",

                "limit": 10, 
                "offset": 0 },
            extensions: {
                 "persistedQuery": { 
                    "version": 1,
                    "sha256Hash": "121996b57011b69386b65ca8fc9e202046fc20bf68b8c8128de0d0e92a681195" 
                } 
            }
        };
        const response = await getData(queryParams, {}, {});
        return res.status(200).json({ data: response?.data });
    } catch (error) {
        return res.status(500).json({ message: 'Failure in Manga Pages.js' });
    }
};

export { getMangaPages };
