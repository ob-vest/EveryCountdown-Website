export interface Movie {
  id: number;
  headline: string;
  subheadline: string;
  description: string;
  release_date: string;
  links: Link[];
  videos: Videos[];
}
export interface Link {
  title: string;
  url: string;
  dateAdded: string;
}
export interface Videos {
  title: string;
  description: string;
  url: string;
}
