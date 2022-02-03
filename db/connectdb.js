import mongoose from 'mongoose';

export const connectdb = () => {
  mongoose
    .connect(
      process.env.MONGO_URI || "mongodb+srv://admin:buaLeU8fEMi8T5w@cluster0.ifv7x.mongodb.net/minor-project?retryWrites=true&w=majority
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log('connection successful and db connected');
    })
    .catch((err) => {
      console.log(err);
    });
};
