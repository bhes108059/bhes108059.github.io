# 內容管理說明

這個資料夾用於管理部落格的所有內容，使用 YAML 格式儲存。

## 資料夾結構

- `diaries/` - 日記文章，每個 YAML 檔案對應一篇日記

## 日記格式

在 `diaries/` 資料夾中建立 YAML 檔案，例如 `2024-11-07.yaml`：

```yaml
id: "1"
title: "日記標題"
date: "2024年11月7日"
mood: "happy"  # 可選：happy, calm, inspired, melancholic
excerpt: "日記摘要"
content: |
  # 日記標題
  
  日記內容可以使用 **Markdown** 語法撰寫。
  
  - 支援列表
  - 支援**粗體**和*斜體*
  - 支援程式碼區塊
  
  ```javascript
  console.log("Hello, World!");
  ```
imageUrl: "/attached_assets/generated_images/image.png"  # 可選
```

**重要**：
- **檔案名稱就是 URL slug**：檔案名稱（不含 `.yaml` 或 `.yml` 副檔名）會自動用作日記 URL（例如：`2024-11-07.yaml` → `/diaries/2024-11-07`）
- 檔案名稱必須是唯一的，建議使用日期格式（例如：`2024-11-07.yaml`）
- 圖片路徑必須以 `/attached_assets/` 開頭，圖片檔案應放在 `client/public/attached_assets/` 資料夾中
- `content` 欄位支援完整的 Markdown 語法
- `mood` 欄位是可選的，可以設定為：`happy`（開心）、`calm`（平靜）、`inspired`（靈感）、`melancholic`（憂鬱）

## 生成內容

每次修改 YAML 檔案後，執行以下命令重新生成內容：

```bash
npm run content:generate
```

或者在開發時，內容會自動生成：

```bash
npm run dev
```

或者在建置時，內容會自動生成：

```bash
npm run build
```

## Markdown 支援

所有 `content` 欄位都支援完整的 Markdown 語法：

- 標題（# ## ###）
- **粗體** 和 *斜體*
- 列表（有序和無序）
- 程式碼區塊和行內程式碼
- 引用
- 連結和圖片
- 表格（透過 GFM 擴展）

## 注意事項

1. **檔案名稱就是 URL**：檔案名稱（不含 `.yaml` 或 `.yml` 副檔名）會自動成為日記的 URL slug
2. 檔案名稱必須是唯一的，建議使用日期格式（例如：`2024-11-07.yaml`）
3. 圖片檔案必須放在 `client/public/attached_assets/` 資料夾中
4. YAML 檔案中的圖片路徑必須以 `/attached_assets/` 開頭
5. 每次修改內容後記得執行 `npm run content:generate` 或重新啟動開發伺服器

