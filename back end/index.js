const connection = require("./connection");
const schema = require("./schema");

const express = require("express");
const rschema = require("./rschema");
const bcrypt = require("bcryptjs");
const path = require("path");
const app = express();
const cschema = require("./cschema");
const cors = require("cors");
const multer = require("multer");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static(path.resolve(__dirname, "public/uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage }).single("pimage");

app.post("/", (req, resp) => {
  upload(req, resp, (err) => {
    if (err) return resp.status(500).json({ error: "File upload failed" });
    const data = new schema({
      pid: req.body.pid,
      pname: req.body.pname,
      pprice: req.body.pprice,
      pdesc: req.body.pdesc,
      pcat: req.body.pcat,
      pimage: "http://localhost:4000/uploads/" + req.file.filename
    });
    data.save()
      .then(() => resp.send("Data saved successfully"))
      .catch(error => resp.status(500).json({ error: "Data save failed", details: error }));
  });
});

app.get("/item/:key", async (req, resp) => {
  try {
    const data = await schema.find({ pid: req.params.key });
    resp.send(data);
  } catch (error) {
    resp.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/products", async (req, resp) => {
  try {
    const data = await schema.find();
    resp.send(data);
  } catch (error) {
    resp.status(500).json({ error: "Failed to fetch products" });
  }
});

app.post("/register", async (req, resp) => {
  try {
    const { uname, upass, uemail, umobile } = req.body;
    const existingUser = await rschema.findOne({ uemail });
    if (existingUser) return resp.status(400).json({ message: "User already registered!" });

    const hashedPassword = await bcrypt.hash(upass, 10);
    const newUser = new rschema({
      uname,
      upass: hashedPassword,
      uemail,
      umobile
    });

    await newUser.save();
    resp.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    resp.status(500).json({ message: "Registration failed!" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { uemail, upass } = req.body;
    const user = await rschema.findOne({ uemail });

    if (!user) return res.status(400).json({ message: "User not found!" });

    const passwordMatch = await bcrypt.compare(upass, user.upass);
    if (passwordMatch) {
      res.send("Login Successfully");
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ message: "Login failed!", error });
  }
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");



  
});
