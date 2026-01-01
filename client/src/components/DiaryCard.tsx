import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Link } from "wouter";
import type { Diary } from "@/types/diary";

interface DiaryCardProps {
  diary: Diary;
}

const moodColors: Record<string, string> = {
  happy: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  calm: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  inspired: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  melancholic: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
};

const moodLabels: Record<string, string> = {
  happy: "開心",
  calm: "平靜",
  inspired: "靈感",
  melancholic: "憂鬱",
};

export default function DiaryCard({ diary }: DiaryCardProps) {
  return (
    <Link href={`/diaries/${diary.slug}`}>
      <Card className="overflow-hidden hover-elevate active-elevate-2 transition-transform duration-200 hover:-translate-y-1 h-full flex flex-col cursor-pointer">
        {diary.imageUrl && (
          <div className="aspect-video overflow-hidden">
            <img
              src={diary.imageUrl}
              alt={diary.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-1 gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            {diary.mood && (
              <Badge 
                variant="secondary" 
                className={moodColors[diary.mood] || ""}
              >
                {moodLabels[diary.mood] || diary.mood}
              </Badge>
            )}
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{diary.date}</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">
              {diary.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3">
              {diary.excerpt}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}

