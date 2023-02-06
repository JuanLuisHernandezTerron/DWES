var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/User");
var db = mongoose.connection;

/* GET users listing. */
router.get("/", function (req, res, next) {
  //Recoge todos los usuarios
  res.json({
    "users ": [
      {
        "id ": 123,
        name: "Juan Perez ",
        phones: {
          home : "999 999 888 ",
          mobile: "666 555 444",
        },
        email: ["jp@example.com ", "jp@example.org "],
        dateOfBirth: "1980-01-02T00:00:00.000Z",
        registered: true,
      },
      {
        "id ": 456,
        name: "Jose Garcia",
        phones: {
          home : "999 888 777",
          mobile: "666 333 999",
        },
        email: ["jg@example.com ", "jg@example.org"],
        dateOfBirth: "1983-01-09T00:00:00.000Z",
        registered: false,
      },
    ],
  });
});

router.get("/:id", function (req, res) {
  if (req.params.id == 123) {
    res.json({
      "id ": 123,
      name: "Juan Perez ",
      phones: {
        "home ": "999 999 888 ",
        mobile: "666 555 444",
      },
      email: ["jp@example.com ", "jp@example.org "],
      dateOfBirth: "1980-01-02T00:00:00.000Z",
      registered: true,
    });
  } else {
    res.status(404).send("No existe ningún usuario con un id");
  }
});

router.post("/", function (req, res) {
  var new_User = req.body;
  res
    .status(200)
    .send("Has ingresado bien el usuario, el usuario " + req.body.name);
});

module.exports = router;
