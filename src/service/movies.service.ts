import axios from "axios";

export class Movies {
  static getMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmJiNDg2MmNhNzY2Yjg3ZTUzY2RhNGY4ZTNkMTcyNCIsInN1YiI6IjY2NTg2MmIzNzRmYjViYzcyNzZjMjcyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CW9uEf-NH-y0DMVMl814Qj2E6xiMPt6JRI2xpGOkHlU`,
          },
        }
      );
      // console.log(res, "hjg");

      return res.data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
}
