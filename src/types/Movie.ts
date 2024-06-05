export type Movie = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  overview: string;
  title: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  isAddedToWatchlist?: boolean;
  original_language: string;
};
