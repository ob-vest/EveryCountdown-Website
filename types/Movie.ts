export interface Movie {
  id: number;
  headline: string;
  subheadline: string;
  description: string;
  release_date: string;
  image_url: string;
  link: Link[];
}
export interface Link {
  title: string;
  url: string;
  dateAdded: string;
}
