const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "True Travel API is running..." });
});

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/hotels", require("./routes/hotel.routes"));
app.use("/api/rooms", require("./routes/room.routes"));
app.use("/api/flights", require("./routes/flight.routes"));
app.use("/api/excursions", require("./routes/excursion.routes"));
app.use("/api/clients", require("./routes/client.routes"));
app.use("/api/bookings", require("./routes/booking.routes"));
app.use("/api/dashboard", require("./routes/dashboard.routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
