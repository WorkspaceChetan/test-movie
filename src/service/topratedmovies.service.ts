import axios from "axios";

export class TopRatedMovies {
  static getTopRatedMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmJiNDg2MmNhNzY2Yjg3ZTUzY2RhNGY4ZTNkMTcyNCIsInN1YiI6IjY2NTg2MmIzNzRmYjViYzcyNzZjMjcyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CW9uEf-NH-y0DMVMl814Qj2E6xiMPt6JRI2xpGOkHlU`,
          },
        }
      );
      return res.data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
}
