import { getData } from "../utils/services/api-calls.js";

const getAnimeList = async (req, res) => {
  try {
    const {category} = req.params;
    const queryParams =
      category != null
        ? {
            variables: {"search":{"genres":[category]},"limit":26,"page":1,"translationType":"sub","countryOrigin":"JP"},
            extensions: {"persistedQuery":{"version":1,"sha256Hash":process.env.ANIME_LIST_WITH_CATEGORY}},
          }
        : {
            variables:{"type":"anime","size":20,"dateRange":1,"page":1,"allowAdult":false,"allowUnknown":false},
            extensions: {"persistedQuery":{"version":1,"sha256Hash":process.env.ANIME_LIST}}
          };
    const response = await getData(queryParams, {}, {});
    return res.status(200).json({ data: response?.data });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ message: "Failure in AnimeDetails.js" });
  }
};

export { getAnimeList };
