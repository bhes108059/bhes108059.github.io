import type { Diary } from "@/types/diary";
import contentData from "./content.json";

// 從生成的 content.json 讀取日記資料
// 日記內容由 content/diaries/ 資料夾中的 YAML 檔案管理
// 修改日記時，請編輯 content/diaries/ 中的 YAML 檔案，然後執行 npm run content:generate
const content = contentData as { diaries: Diary[] };

export const diaries: Diary[] = content.diaries || [];

