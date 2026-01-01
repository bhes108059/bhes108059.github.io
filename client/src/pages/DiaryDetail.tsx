import { useRoute } from "wouter";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { diaries } from "@/data/diaries";
import MarkdownContent from "@/components/MarkdownContent";

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

export default function DiaryDetail() {
  const [, params] = useRoute("/diaries/:slug");
  const diary = diaries.find((d) => d.slug === params?.slug);

  if (!diary) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">日記未找到</h1>
            <Link href="/diaries">
              <Button>返回日記列表</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <article>
          {diary.imageUrl && (
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={diary.imageUrl}
                alt={diary.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
          )}

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
            <div className="mb-8">
              <Link href="/diaries">
                <Button variant="ghost" size="sm" className="gap-2 mb-6">
                  <ArrowLeft className="w-4 h-4" />
                  返回日記列表
                </Button>
              </Link>

              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {diary.mood && (
                  <Badge 
                    variant="secondary" 
                    className={moodColors[diary.mood] || ""}
                  >
                    {moodLabels[diary.mood] || diary.mood}
                  </Badge>
                )}
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{diary.date}</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                {diary.title}
              </h1>
            </div>

            <div className="mb-16 bg-card rounded-2xl p-8 shadow-lg">
              <MarkdownContent content={diary.content} />
            </div>
          </div>
        </article>
      </main>
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 MemoryBox. 分享您的二次元世界
          </p>
        </div>
      </footer>
    </div>
  );
}

