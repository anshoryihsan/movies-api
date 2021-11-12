import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const getByName = async (name, page) => {
  try {
    const res = await axios.get(
      `${process.env.MOVIE_URL}/?apikey=${process.env.MOVIE_KEY}&s=${name}${
        page ? "&page=" + page : ""
      }`
    );
    const { data } = res;
    if (data.Search) {
      return [data.Search, null];
    } else {
      return [null, { status: 400, message: "Movie not found!" }];
    }
  } catch (error) {
    return [null, { status: 500, message: "Internal Server Error!" }];
  }
};
export { getByName };
