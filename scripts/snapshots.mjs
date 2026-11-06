// Renderiza os arquivos de currículo em PDF (para cada perfil) e a imagem de preview (og.jpg) em dist/:
//   cv.pdf             - versão Unificada (Híbrida)
//   cv-arquivista.pdf  - versão com foco em Arquivista Sênior
//   cv-dev-python.pdf  - versão com foco em Desenvolvedor Python & IA
//   og.jpg             - hero em 1200×630 para preview de links
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright";

const root = "dist";
const basePrefix = "/curriculo";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".woff2": "font/woff2",
};

const server = createServer(async (req, res) => {
  try {
    let reqPath = decodeURIComponent(new URL(req.url || "/", "http://localhost").pathname);
    if (reqPath.startsWith(basePrefix)) {
      reqPath = reqPath.slice(basePrefix.length) || "/";
    }
    if (reqPath.endsWith("/")) reqPath += "index.html";
    const filePath = join(root, normalize(reqPath));
    const info = await stat(filePath);
    if (!info.isFile()) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const data = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const address = server.address();
const port = typeof address === "object" && address ? address.port : 4321;
const baseUrl = `http://127.0.0.1:${port}${basePrefix}/`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });

try {
  const pdfVariants = [
    { query: "?perfil=unificado", file: "cv.pdf" },
    { query: "?perfil=arquivista", file: "cv-arquivista.pdf" },
    { query: "?perfil=dev", file: "cv-dev-python.pdf" },
  ];

  for (const variant of pdfVariants) {
    const cv = await browser.newPage();
    await cv.emulateMedia({ media: "print", reducedMotion: "reduce" });
    await cv.goto(`${baseUrl}${variant.query}`, { waitUntil: "networkidle" });
    await cv.evaluate(() => document.fonts.ready);
    await cv.pdf({ path: join(root, variant.file), preferCSSPageSize: true });
    await cv.close();
    console.log(`wrote ${root}/${variant.file}`);
  }

  // Pintura estática com reducedMotion para gerar a imagem de compartilhamento (og.jpg)
  const og = await browser.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: "reduce" });
  await og.goto(baseUrl, { waitUntil: "networkidle" });
  await og.evaluate(() => document.fonts.ready);
  await og.screenshot({ path: join(root, "og.jpg"), type: "jpeg", quality: 85 });
  await og.close();
  console.log(`wrote ${root}/og.jpg`);
} finally {
  await browser.close();
  server.close();
}
