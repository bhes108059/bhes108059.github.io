import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  diaries: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    diaries: [],
  };

  // Load diaries
  try {
    const diariesDir = resolve(contentPath, "diaries");
    const diaryFiles = await readdir(diariesDir);
    for (const file of diaryFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(diariesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const diary = yaml.load(content) as any;
          // 從檔案名稱生成 slug（移除副檔名）
          const slug = file.replace(/\.(yaml|yml)$/, "");
          diary.slug = slug;
          // 驗證圖片 URL 是否以 /attached_assets/ 開頭
          if (diary.imageUrl && !diary.imageUrl.startsWith("/attached_assets/")) {
            console.warn(`警告: 日記 "${diary.title}" 的圖片 URL "${diary.imageUrl}" 應該以 "/attached_assets/" 開頭`);
          }
          data.diaries.push(diary);
        }
      }
    }
    // Sort by date descending
    data.diaries.sort((a, b) => {
      try {
        const dateA = new Date(a.date.replace(/年|月|日/g, "/").replace(/\/$/, ""));
        const dateB = new Date(b.date.replace(/年|月|日/g, "/").replace(/\/$/, ""));
        return dateB.getTime() - dateA.getTime();
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load diaries:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Diaries: ${data.diaries.length}`);
}

generateContent().catch(console.error);

