export interface Game {
  metacritic: number;
  id: string;
  background_image: string;
  name: string;
  released: string;
  metacritc_url: string;
  website: string;
  description: string;
  metacritc: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  srceenshots: Array<Screenshots>;
  traliers: Array<Trailer>;
}
export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {
  name: string;
}
interface ParentPlatform {
  platform: {
    name: string;
    slug: string;
  };
}
interface Publishers {
  name: string;
}
interface Rating {
  id: number;
  count: number;
  title: string;
}
interface Screenshots {
  image: string;
}
interface Trailer {
  data: {
    max: string;
  };
}
