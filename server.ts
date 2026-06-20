import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 3000;

// Procedural high-contrast vector logo generation for Sponsors and Host Teams
const assetsDir = path.join(process.cwd(), "assets");
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const sponsorsList = [
  {
    name: "APEX",
    sub: "DYNAMICS",
    color: "#ef4444",
    icon: `<path d="M12 2 L22 20 L2 20 Z" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linejoin="round" /><path d="M12 8 L17 17 L7 17 Z" fill="#ef4444" />`
  },
  {
    name: "AETHER",
    sub: "AEROSPACE",
    color: "#3b82f6",
    icon: `<circle cx="12" cy="12" r="8" fill="none" stroke="#3b82f6" stroke-width="2" /><circle cx="12" cy="12" r="3" fill="#3b82f6" /><path d="M4 12 H20 M12 4 V20" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.4" />`
  },
  {
    name: "NEXUS",
    sub: "SYSTEMS",
    color: "#10b981",
    icon: `<path d="M12 3 L20 8 V16 L12 21 L4 16 V8 Z" fill="none" stroke="#10b981" stroke-width="2" /><circle cx="12" cy="12" r="4" fill="#10b981" />`
  },
  {
    name: "QUANTUM",
    sub: "COMPUTING",
    color: "#a855f7",
    icon: `<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="#a855f7" stroke-width="2" /><path d="M9 9 H15 V15 H9 Z" fill="#a855f7" />`
  },
  {
    name: "OCTANE",
    sub: "ENERGY",
    color: "#f59e0b",
    icon: `<path d="M13 2 L3 14 H11 L10 22 L20 10 H12 Z" fill="#f59e0b" />`
  },
  {
    name: "NOVA",
    sub: "LABORATORIES",
    color: "#06b6d4",
    icon: `<path d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z" fill="#06b6d4" />`
  }
];

const teamsList = [
  {
    num: "365",
    name: "MOE",
    color: "#22c55e",
    icon: `<rect x="3" y="3" width="18" height="18" rx="4" fill="#22c55e" /><text x="12" y="16" font-family="Impact, sans-serif" font-size="12" font-weight="900" fill="#09090b" text-anchor="middle">M</text>`
  },
  {
    num: "1111",
    name: "POWER PLAY",
    color: "#eab308",
    icon: `<path d="M5 3 L19 3 L15 11 L19 11 L9 21 L11 13 L5 13 Z" fill="#eab308" />`
  },
  {
    num: "5432",
    name: "IRON LOBSTERS",
    color: "#ef4444",
    icon: `<circle cx="12" cy="12" r="9" fill="none" stroke="#ef4444" stroke-width="2.5" /><path d="M8 10 C8 8, 16 8, 16 10 C16 12, 12 11, 12 14 L12 17" stroke="#ef4444" stroke-width="2" stroke-linecap="round" fill="none" /><circle cx="12" cy="7" r="1.5" fill="#ef4444" />`
  },
  {
    num: "8888",
    name: "COSMIC GYP",
    color: "#3b82f6",
    icon: `<ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="#3b82f6" stroke-width="2" transform="rotate(-30 12 12)" /><circle cx="12" cy="12" r="4" fill="#3b82f6" />`
  },
  {
    num: "9999",
    name: "CYBER CLAW",
    color: "#ec4899",
    icon: `<path d="M4 8 C4 4, 20 4, 20 8 L16 16 H8 Z" fill="none" stroke="#ec4899" stroke-width="2" /><path d="M8 12 L12 16 L16 12" stroke="#ec4899" stroke-width="2" fill="none" />`
  },
  {
    num: "7777",
    name: "APEX FUSION",
    color: "#14b8a6",
    icon: `<polygon points="12,2 22,8 22,18 12,22 2,18 2,8" fill="none" stroke="#14b8a6" stroke-width="2" /><circle cx="12" cy="12" r="3" fill="#14b8a6" />`
  }
];

sponsorsList.forEach((sp, idx) => {
  const filePath = path.join(assetsDir, `Sponsor_${idx + 1}.svg`);
  if (fs.existsSync(filePath)) return;
  const fileContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80" width="100%" height="100%">
  <rect width="160" height="80" rx="8" fill="#09090b" stroke="#18181b" stroke-width="1.5" />
  <g transform="translate(16, 28)">
    ${sp.icon}
  </g>
  <text x="48" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="900" fill="#f4f4f5" letter-spacing="1.5">${sp.name}</text>
  <text x="48" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="7.5" font-weight="700" fill="#71717a" letter-spacing="2">${sp.sub}</text>
</svg>`;
  fs.writeFileSync(filePath, fileContent);
});

teamsList.forEach((t, idx) => {
  const filePath = path.join(assetsDir, `Team_logo_${idx + 1}.svg`);
  if (fs.existsSync(filePath)) return;
  const fileContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80" width="100%" height="100%">
  <rect width="160" height="80" rx="8" fill="#09090b" stroke="#18181b" stroke-width="1.5" />
  <g transform="translate(16, 28)">
    ${t.icon}
  </g>
  <text x="48" y="41" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#f4f4f5" letter-spacing="1">#${t.num}</text>
  <text x="48" y="54" font-family="system-ui, -apple-system, sans-serif" font-size="8.5" font-weight="800" fill="${t.color}" letter-spacing="1.5">${t.name}</text>
</svg>`;
  fs.writeFileSync(filePath, fileContent);
});

// Import Jimp for PNG generation on server boot
import Jimp from "jimp";

function hexToJimpColor(hex: string): number {
  const cleanHex = hex.replace("#", "");
  return parseInt(cleanHex + "ff", 16);
}

async function generatePngLogos() {
  try {
    const fontMain = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
    const fontSub = await Jimp.loadFont(Jimp.FONT_SANS_8_WHITE);

    // Generate Sponsor PNGs
    for (let i = 0; i < sponsorsList.length; i++) {
      const pinPath = path.join(assetsDir, `Sponsor_${i + 1}.png`);
      if (fs.existsSync(pinPath)) {
        const stats = fs.statSync(pinPath);
        if (stats.size > 0) {
          continue;
        }
      }
      const sp = sponsorsList[i];
      // Create a 160x80 card with 0x0c0c0eff deep charcoal background
      const image = new Jimp(160, 80, 0x0c0c0eff);

      // Draw a subtle border around the entire card
      const borderColor = 0x222226ff;
      for (let x = 0; x < 160; x++) {
        image.setPixelColor(borderColor, x, 0);
        image.setPixelColor(borderColor, x, 79);
      }
      for (let y = 0; y < 80; y++) {
        image.setPixelColor(borderColor, 0, y);
        image.setPixelColor(borderColor, 159, y);
      }

      // Draw elegant accent strip on the far left edge
      const colorHex = hexToJimpColor(sp.color);
      for (let y = 4; y < 76; y++) {
        for (let x = 2; x < 5; x++) {
          image.setPixelColor(colorHex, x, y);
        }
      }

      // Advanced geometric vector-style drawing on the left (cx = 24, cy = 40)
      const cx = 24;
      const cy = 40;
      for (let py = 24; py <= 56; py++) {
        for (let px = 10; px <= 38; px++) {
          const rx = px - cx;
          const ry = py - cy;
          let draw = false;

          if (i === 0) {
            // APEX - sci-fi double chevron
            const distFromApex = Math.abs(rx);
            const slopeY = py - 24;
            if (slopeY >= 0 && slopeY <= 24) {
              const isInner = distFromApex < slopeY * 0.44;
              const isOuter = distFromApex < slopeY * 0.8;
              if (isOuter && !isInner) draw = true;
            }
          } else if (i === 1) {
            // AETHER - planetary orbit with core
            const distSq = rx * rx + ry * ry;
            if ((distSq >= 64 && distSq <= 85) || distSq <= 9) {
              draw = true;
            }
          } else if (i === 2) {
            // NEXUS - high-tech concentric network/hexagon
            const distHex = Math.abs(rx) * 1.73 + Math.abs(ry);
            if ((distHex >= 15 && distHex <= 20) || (Math.abs(rx) <= 2 && Math.abs(ry) <= 2)) {
              draw = true;
            }
          } else if (i === 3) {
            // QUANTUM - 2x2 electronic node cluster
            if ((Math.abs(rx) >= 2 && Math.abs(rx) <= 7) && (Math.abs(ry) >= 2 && Math.abs(ry) <= 7)) {
              draw = true;
            }
          } else if (i === 4) {
            // OCTANE - dual slanted energy bars
            const inBolt1 = (ry >= -10 && ry <= 0 && rx >= ry * 0.5 - 4 && rx <= ry * 0.5 + 4);
            const inBolt2 = (ry >= 0 && ry <= 10 && rx >= ry * 0.5 - 4 && rx <= ry * 0.5 + 4);
            if (inBolt1 || inBolt2) draw = true;
          } else if (i === 5) {
            // NOVA - quad-flare spark
            const abs_rx = Math.abs(rx);
            const abs_ry = Math.abs(ry);
            if ((abs_rx + abs_ry <= 10) || (abs_rx <= 2 && abs_ry <= 12) || (abs_ry <= 2 && abs_rx <= 12)) {
              draw = true;
            }
          }

          if (draw) {
            image.setPixelColor(colorHex, px, py);
          }
        }
      }

      // Print clean, properly nested typography using Sans 16/8
      image.print(fontMain, 46, 20, sp.name);
      image.print(fontSub, 46, 42, sp.sub);

      await image.writeAsync(path.join(assetsDir, `Sponsor_${i + 1}.png`));
    }

    // Generate Team PNGs
    for (let i = 0; i < teamsList.length; i++) {
      const pinPath = path.join(assetsDir, `Team_logo_${i + 1}.png`);
      if (fs.existsSync(pinPath)) {
        const stats = fs.statSync(pinPath);
        if (stats.size > 0) {
          continue;
        }
      }
      const t = teamsList[i];
      const image = new Jimp(120, 120, 0x0c0c0eff);

      // Draw subtle border around the entire card
      const borderColor = 0x222226ff;
      for (let x = 0; x < 120; x++) {
        image.setPixelColor(borderColor, x, 0);
        image.setPixelColor(borderColor, x, 119);
      }
      for (let y = 0; y < 120; y++) {
        image.setPixelColor(borderColor, 0, y);
        image.setPixelColor(borderColor, 119, y);
      }

      // Accent strip on the far left edge
      const colorHex = hexToJimpColor(t.color);
      for (let y = 4; y < 116; y++) {
        for (let x = 2; x < 5; x++) {
          image.setPixelColor(colorHex, x, y);
        }
      }

      // Geometric custom logo drawing for each team (centered at cx = 60, cy = 34)
      const cx = 60;
      const cy = 34;
      for (let py = 18; py <= 50; py++) {
        for (let px = 46; px <= 74; px++) {
          const rx = px - cx;
          const ry = py - cy;
          let draw = false;

          if (i === 0) {
            // MOE - Block M shape
            const abs_rx = Math.abs(rx);
            if (abs_rx >= 8 && abs_rx <= 11 && ry >= -10 && ry <= 10) {
              draw = true; // side pillars
            }
            if (abs_rx <= 3 && ry >= -10 && ry <= 2) {
              draw = true; // center dip
            }
            if (ry >= -10 && ry <= -7 && abs_rx <= 9) {
              draw = true; // top cross
            }
          } else if (i === 1) {
            // POWER PLAY - central bolt energy motif
            const isBolt = (ry >= -10 && ry <= 10 && rx >= ry * 0.4 - 2 && rx <= ry * 0.4 + 2);
            if (isBolt) draw = true;
          } else if (i === 2) {
            // IRON LOBSTERS - industrial gear outline
            const distSq = rx * rx + ry * ry;
            if (distSq >= 36 && distSq <= 85) {
              const angle = Math.atan2(ry, rx);
              const tooth = Math.sin(angle * 8) > 0;
              if (tooth || distSq <= 49) {
                draw = true;
              }
            }
          } else if (i === 3) {
            // COSMIC GYP - orbital planetary system
            const distSq = rx * rx + ry * ry;
            // Draw diagonal orbit band
            const valOrbit = Math.abs(rx + ry * 1.5);
            if ((valOrbit >= 4 && valOrbit <= 8 && distSq <= 120) || distSq <= 16) {
              draw = true;
            }
          } else if (i === 4) {
            // CYBER CLAW - robotic mechanical claw
            const abs_rx = Math.abs(rx);
            if (abs_rx >= 6 && abs_rx <= 10 && ry >= -6 && ry <= 10) {
              draw = true; // outer claws
            }
            if (ry >= 6 && ry <= 10 && abs_rx <= 6) {
              draw = true; // wrist base
            }
            if (ry >= -10 && ry <= -6 && abs_rx <= 3) {
              draw = true; // pinchers
            }
          } else if (i === 5) {
            // APEX FUSION - neat high-contrast shield
            const abs_rx = Math.abs(rx);
            if (abs_rx <= 10 && ry >= -10 && ry <= 10) {
              const boundary = 10 - Math.max(0, ry) * 0.5;
              if (abs_rx >= boundary - 2 && abs_rx <= boundary) {
                draw = true; // shield border
              }
              if (abs_rx <= 2 && ry >= -6 && ry <= 6) {
                draw = true; // center core line
              }
            }
          }

          if (draw) {
            image.setPixelColor(colorHex, px, py);
          }
        }
      }

      image.print(fontMain, 14, 70, `#${t.num}`);
      image.print(fontSub, 14, 90, t.name);

      await image.writeAsync(path.join(assetsDir, `Team_logo_${i + 1}.png`));
    }
    console.log("Successfully generated procedural high-contrast sponsor and host team PNGs in assets.");
  } catch (err) {
    console.error("Error creating PNG mock assets:", err);
  }
}

// Kickoff async PNG generation
generatePngLogos();

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

// Secure endpoint to fetch teams from FIRST Tech Challenge API
app.get("/api/teams", async (req, res) => {
  try {
    const username = process.env.FTC_USERNAME || "hayeater01";
    const token = process.env.FTC_TOKEN || process.env.FTC_AUTH_TOKEN || "A4211B58-D36A-4115-AAE4-04025DC4FC4C";
    const season = req.query.season || "2025";
    const eventCode = req.query.ntCode || req.query.eventCode || "USCANOSMS1";

    const credentials = Buffer.from(`${username}:${token}`).toString("base64");
    
    let allTeams: any[] = [];
    let page = 1;
    let pageTotal = 1;

    do {
      const url = `https://ftc-api.firstinspires.org/v2.0/${season}/teams?eventCode=${eventCode}&page=${page}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": `Basic ${credentials}`
        }
      });

      if (!response.ok) {
        const text = await response.text();
        console.error(`FTC API error page ${page}:`, text);
        if (allTeams.length > 0) break;
        return res.status(response.status).json({
          error: `FTC API responded with code ${response.status}`,
          details: text
        });
      }

      const data: any = await response.json();
      if (data && Array.isArray(data.teams)) {
        allTeams = allTeams.concat(data.teams);
      } else {
        break;
      }

      pageTotal = data.pageTotal || 1;
      page++;
    } while (page <= pageTotal);

    return res.json({ teams: allTeams });
  } catch (error: any) {
    console.error("Error fetching teams from FTC API:", error);
    return res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
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
