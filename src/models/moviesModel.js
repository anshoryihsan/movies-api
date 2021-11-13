import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const getName = async (name, page) => {
  try {
    const { data } = await axios.get(
      `${process.env.MOVIE_URL}/?apikey=${process.env.MOVIE_KEY}&s=${name}${
        page ? "&page=" + page : ""
      }`
    );
    return data;
  } catch (error) {
    return error;
  }
};

const getDetail = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.MOVIE_URL}/?apikey=${process.env.MOVIE_KEY}&i=${id}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export { getName, getDetail };
