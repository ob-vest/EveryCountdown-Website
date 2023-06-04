import { Link, Video } from "@/types/Shared";
// There is for now no need to have a separate type for each category.
export interface CategoryItem {
  id: number;
  headline: string;
  subheadline: string;
  description: string;
  release_date: string;
  links: Link[];
  videos: Video[];
}
