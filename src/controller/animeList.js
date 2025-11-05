import { getData } from "../utils/services/api-calls.js";

const getAnimeList = async (req, res) => {
  try {
    const {category} = req.params;
    const queryParams =
      category != null
        ? {
            variables: {"search":{"genres":[category]},"limit":26,"page":1,"translationType":"sub","countryOrigin":"JP"},
            extensions: {"persistedQuery":{"version":1,"sha256Hash":"06327bc10dd682e1ee7e07b6db9c16e9ad2fd56c1b769e47513128cd5c9fc77a"}},
          }
        : {
            variables:{"type":"anime","size":20,"dateRange":1,"page":1,"allowAdult":false,"allowUnknown":false},
            extensions: {"persistedQuery":{"version":1,"sha256Hash":"1fc9651b0d4c3b9dfd2fa6e1d50b8f4d11ce37f988c23b8ee20f82159f7c1147"}}
          };
    const response = await getData(queryParams, {}, {});
    return res.status(200).json({ data: response?.data });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ message: "Failure in AnimeDetails.js" });
  }
};

export { getAnimeList };
