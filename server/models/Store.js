import mongoose from "mongoose";
const StoreSchema = new mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  category: { type: String, default: "any" },
  image: { type: String },
});
export default mongoose.model("Store", StoreSchema);
