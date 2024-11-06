import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express"; // Ensure you import express too

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 9000;

let users = [
  { id: 1, name: "Dashka", age: 35 },
  { id: 2, name: "Duluu", age: 40 },
  { id: 3, name: "Bolormaa", age: 18 },
];

app.get("/users", (request, response) => {
  response.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
