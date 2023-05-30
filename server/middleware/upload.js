import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: "mongodb+srv://arshadnawaz:arshadnb5@cluster0.rvfdu.mongodb.net/social-app?retryWrites=true&w=majority",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-any-name-${file.originalname
        .split(" ")
        .join("")}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-any-name--${file.originalname
        .split(" ")
        .join("")}`,
    };
  },
});

export const upload = multer({ storage });
