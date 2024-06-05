export type MovieDetails = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  overview: string;
  title: string;
  original_title: string;
  release_date: number;
  vote_average: number;
  original_language: string;
  isAddedToWatchlist?: boolean;
  vote_count: number;
};
