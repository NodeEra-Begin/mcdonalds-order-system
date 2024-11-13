import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema: Schema<IUser> = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
