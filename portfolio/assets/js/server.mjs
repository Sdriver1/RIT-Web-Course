import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT;
const app = express();

const serveStatic = (route, directory) => {
  app.use(route, express.static(join(__dirname, directory), { index: false }));
};
serveStatic("/assets/css", "../../assets/css");
serveStatic("/assets/js", "../../assets/js");
serveStatic("/assets/images", "../../assets/images");

const serveHTML = (route, file) => {
  app.get(route, (req, res) => res.sendFile(join(__dirname, file)));
};

const htmlRoutes = [
  { route: "/", file: "../../index.html" },
  { route: "/resume", file: "../../resume.html" },
  { route: "/photos", file: "../../photos.html" },
];

htmlRoutes.forEach((route) => serveHTML(route.route, route.file));

app.get("/favorites/:favorite", (req, res) => {
  const favname = ["movies", "songs", "foods"];
  const favorite = req.params.favorite;
  const errorPath = join(__dirname, "../../404.html");
  if (!favname.includes(favorite)) {
    res.sendFile(errorPath);
    return;
  }
  const favoritePath = join(__dirname, `../../${favorite}.html`);

  fs.access(favoritePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send("Favorite not found");
    } else {
      res.sendFile(favoritePath);
    }
  });
});

app.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = join(__dirname, "../../assets/images", imageName);

  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`Image not found: ${imagePath}`);
      res.status(404).send("Image not found");
    } else {
      res.sendFile(imagePath);
    }
  });
});

app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, "../../404.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
