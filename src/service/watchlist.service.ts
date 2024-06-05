export class WatchListServices {
  static getWatchList = () => {
    const favouriteMovies = localStorage.getItem("favouriteMovies")
      ? (JSON.parse(localStorage.getItem("favouriteMovies")!) as string[])
      : ([] as string[]);
    return favouriteMovies;
  };

  static setWatchList = (data: string[]) => {
    localStorage.setItem("favouriteMovies", JSON.stringify(data));
  };

  static addToWatchList = (id: number) => {
    const favouriteMovies = WatchListServices.getWatchList();
    if (!favouriteMovies.includes(id.toString())) {
      favouriteMovies.push(id.toString());
      WatchListServices.setWatchList(favouriteMovies);
    }
    return favouriteMovies;
  };

  static removeFromWatchList = (id: number) => {
    const favouriteMovies = WatchListServices.getWatchList();
    const index = favouriteMovies.findIndex((x) => x === id.toString());

    if (index !== -1) {
      favouriteMovies.splice(index, 1);
      WatchListServices.setWatchList(favouriteMovies);
    }
    return favouriteMovies;
  };
}
