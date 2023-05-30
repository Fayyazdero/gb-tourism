import mongoose from "mongoose";

export const connection = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      "mongodb+srv://arshadnawaz:arshadnb5@cluster0.rvfdu.mongodb.net/social-app?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("connected to database");
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
};
