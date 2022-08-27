const mongoose = require("mongoose");
//require("dotenv").config({ path: ".env" });
// require("dotenv").config();

// const { MONGO_DB_URI } = process.env;

const connectionString =
  "mongodb+srv://Hestia:Hestia.3412@cluster-hestia.z4ikf27.mongodb.net/?retryWrites=true&w=majority";

// comment for validate .env
if (!connectionString) {
  console.error(
    "Se requiere variables de entorno: MONGO_DB_URI"
  );
}

// conexión a mongodb
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

process.on("uncaughtException", (error) => {
  console.error(error);
  mongoose.disconnect();
});