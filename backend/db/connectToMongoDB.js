import mongoose from "mongoose";

console.log(process.env.MONGO_DB_URI)
const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://gohildharmik23:JVPEjcE7WekqXHIl@cluster0.k34brwf.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
