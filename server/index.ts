import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Health check endpoint for keeping the service active
  app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });

  // Self-ping to keep Render service active (prevents free tier sleep)
  // Pings every 14 minutes (840 seconds) to stay within Render's activity window
  if (process.env.NODE_ENV === "production") {
    const PING_INTERVAL = 14 * 60 * 1000; // 14 minutes in milliseconds
    const RENDER_URL = process.env.RENDER_EXTERNAL_URL || `http://localhost:${port}`;

    setInterval(async () => {
      try {
        const response = await fetch(`${RENDER_URL}/health`);
        if (response.ok) {
          console.log(`[${new Date().toISOString()}] Self-ping successful`);
        }
      } catch (error) {
        console.error(`[${new Date().toISOString()}] Self-ping failed:`, error);
      }
    }, PING_INTERVAL);

    console.log(`Self-ping enabled: will ping every ${PING_INTERVAL / 1000 / 60} minutes`);
  }
}

startServer().catch(console.error);
