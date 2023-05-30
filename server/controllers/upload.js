export const imageUpload = async (req, res) => {
  const { file } = req;
  try {
    if (file === undefined) {
      res.status(404).json({ message: "Please select a file" });
    } else {
      const imgUrl = `https://storymugg.herokuapp.com/api/file/${file.filename}`;
      res.status(200).json(imgUrl);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    res.send("not found");
  }
};
