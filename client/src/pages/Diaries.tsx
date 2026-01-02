import Header from "@/components/Header";
import DiaryCard from "@/components/DiaryCard";
import { diaries } from "@/data/diaries";

export default function Diaries() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                我的日記
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                記錄生活的點點滴滴
              </p>
            </div>

            {diaries.length === 0 ? (
              <div className="text-center text-muted-foreground">暫無日記</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {diaries.map((diary) => (
                  <DiaryCard key={diary.id} diary={diary} />
                ))}
              </div>
            )}
          </div>
        </div>
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

