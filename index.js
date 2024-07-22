const express = require("express");
const bodyParser = require("body-parser");

const httpServer = express();

httpServer.use(bodyParser.json());

httpServer.listen(3000, "0.0.0.0", () => {
    console.log("server started", "webserver is live 🌐");
    
});
const CreateRoom = [
  {
    NumberOfSeatsAvailable: 1000,
    AmenitiesInRoom: ["A/C","Bed","Sofa","Water Heater", "Toilet","bathroom"],
    PriceFor1Hour: 10000,
  },
];
const BookingRoom = [
  {
    customerName: "Rajesh",
    Date: "22.07.2024",
    StartTime: "10:00am",
    EndTime: "3:00pm",
    RoomId: "2D",
  },
  {
    customerName: "leo DAs",
    Date: "23.07.2024",
    StartTime: "11:00am",
    EndTime: "2:00pm",
    RoomId: "3D",
  },
];

const AllRoominBD = [
  {
    RoomName: "2D",
    BookedStatus: "active",
    customerName: "Rajesh",
    Date: "22.07.2024",
    StartTime: "10.00am",
    EndTime: "3.00pm",
  },
  {
    RoomName: "3D",
    BookedStatus: "inactive",
    customerName: "Leo Das",
    Date: "23.07.2024",
    StartTime: "11.00am",
    EndTime: "2.00pm",
  },
];
const AllCustomerinBD = [
  {
    CustomerName: "Rajesh",
    RoomName: "2D",
    Date: "22.07.2024",
    SatrtTime: "10.00am",
    EndTime: "3.00pm",
  },
  {
    CustomerName: "Leo Das",
    RoomName: "3D",
    Date: "23.07.2024",
    SatrtTime: "11.00am",
    EndTime: "2.00pm",
  },
];

const HowManyTB = [
  {
    CustomerName: "Rajesh",
    RoomName: "2D",
    Date: "22.07.2024",
    StartTime: "10.00am",
    EndTime: "3.00pm",
    BookingId: "13l",
    BookingDate: "22.07.2024",
    BookingStatus: "active",
  },
  {
    CustomerName: "Leo Das",
    RoomName: "3D",
    Date: "23.07.2024",
    StartTime: "11.00am",
    EndTime: "2.00pm",
    BookingId: "14l",
    BookingDate: "22.07.2024",
    BookingStatus: "inactive",
  },
];

httpServer.post("/CreateRoom", (req, res) => {  
  CreateRoom.push(req.body);
  return res.status(200).json({
      message: "Data created successfully",
      CreateRoom
  });
});

httpServer.post("/BookingRoom", (req, res) => {
  BookingRoom.push(req.body);
  return res.status(200).json({
      message: "Data created successfully",
      BookingRoom
  });
});

httpServer.get("/AllRoominBD", (req, res) => {
    return res.status(200).json({
      AllRoominBD,
    });
});

httpServer.get("/AllCustomerinBD", (req, res) => {
  return res.json({ AllCustomerinBD });
});

httpServer.get("/HowManyTB", (req, res) => {
  return res.json({ HowManyTB });
});
