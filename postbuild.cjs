import { copyFileSync } from "fs";
import { resolve, join } from "path";

// مسیر فایل‌های ساخته‌شده
const distDir = resolve(__dirname, "dist");

// کپی کردن index.html به 404.html
copyFileSync(join(distDir, "index.html"), join(distDir, "404.html"));

console.log("404.html created successfully!");
