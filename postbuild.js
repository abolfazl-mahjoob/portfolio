const fs = require("fs");
const path = require("path");

// مسیر فایل‌های ساخته‌شده
const distDir = path.resolve(__dirname, "dist");

// کپی کردن index.html به 404.html
fs.copyFileSync(
  path.join(distDir, "index.html"),
  path.join(distDir, "404.html")
);

console.log("404.html created successfully!");
