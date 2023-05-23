const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;
const connectDB = require("./config/db")
connectDB()

app.use(cors());
app.use(express.json(),express.urlencoded({ extended : true }));
require("./routes/productRoutes")(app)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});