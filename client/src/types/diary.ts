export type Mood = "happy" | "calm" | "inspired" | "melancholic";

export interface Diary {
  id: string;
  title: string;
  slug: string;
  date: string;
  mood?: Mood;
  imageUrl?: string;
  excerpt: string;
  content: string;
}

