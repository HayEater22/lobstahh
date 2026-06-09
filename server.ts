import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Specific clean route handlers matching our Vercel architecture
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

app.get("/event", (req, res) => {
  res.sendFile(path.join(process.cwd(), "event.html"));
});

app.get("/schedule", (req, res) => {
  res.sendFile(path.join(process.cwd(), "schedule.html"));
});

app.get("/past-seasons", (req, res) => {
  res.sendFile(path.join(process.cwd(), "past-seasons.html"));
});

app.get("/judging", (req, res) => {
  res.sendFile(path.join(process.cwd(), "judging.html"));
});

app.get("/teams", (req, res) => {
  res.sendFile(path.join(process.cwd(), "teams.html"));
});

// Fallback to static serving for assets, css, or other relative static resources
app.use(express.static(process.cwd()));

// Handle clean URL redirects or any 404 falling back to index.html
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(process.cwd(), "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`FTC Lobster Cup Server running locally on http://localhost:${PORT}`);
});
