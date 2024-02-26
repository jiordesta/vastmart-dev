import mongoose from "mongoose";
const StoreSchema = new mongoose.Schema({
  name: { type: String },
  cathegory: { type: String },
});
export default mongoose.model("Store", StoreSchema);
