import { Link, Video } from "@/types/Shared";
// There is for now no need to have a separate type for each category.
export type CategoryType =
  | "movie"
  | "anime"
  | "tv"
  | "game"
  | "tech"
  | "politics"
  | "holiday";
export interface CategoryItem {
  id: number;
  type: CategoryType;
  headline: string;
  subheadline?: string;
  description?: string;
  release_date: string;
  confirmed: boolean;
  image_url: string;
  links?: Link[];
  videos?: Video[];
}
