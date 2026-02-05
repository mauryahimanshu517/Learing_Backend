import app from "./src/app.js";
import dbConnect from "./src/config/dbdata.js ";

dbConnect();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
