interface PostType {
  id?: number;
  title: string;
  slug: string;
  category: string | CategoryType;
  content: string;
  created_at?: string | Date;
  isTemp: boolean;
}
