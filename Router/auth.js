import express from "express";

import addStudent from "../user-controller/addStudent.js";
import CheckAtten from "../user-controller/CheckAtten.js";
import getStudent from "../user-controller/getStudent.js";
import updateStudent from "../user-controller/updateStudent.js";
import markAttendence1 from "../user-controller/markAttendence1.js";
import markAttendence2 from "../user-controller/markAttendence2.js";
import markAttendence3 from "../user-controller/markAttendence3.js";
import markAttendence4 from "../user-controller/markAttendence4.js";
import countStudent from "../user-controller/countStudent.js";

import verifyToken from "../middleware/verifyToken.js";
import AdminLogin from "../user-controller/facultyAuth.js";

const Router = express.Router();

Router.post("/adminlogin", AdminLogin);
Router.post("/addstudent", verifyToken, addStudent);
Router.get("/getstudent", verifyToken, getStudent);
Router.post("/checkattendence", verifyToken, CheckAtten);
Router.post("/updatestudent", verifyToken, updateStudent);
Router.post("/markattendece1", verifyToken, markAttendence1);
Router.post("/markattendece2", verifyToken, markAttendence2);
Router.post("/markattendece3", verifyToken, markAttendence3);
Router.post("/markattendece4", verifyToken, markAttendence4);
Router.post("/studentnumber", verifyToken, countStudent);

export default Router;
