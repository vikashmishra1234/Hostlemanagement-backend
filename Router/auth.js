import express from 'express';
import {body} from 'express-validator';
import addStudent from '../user-controller/addStudent.js';
import getStudent from '../user-controller/getStudent.js';
import updateStudent from '../user-controller/updateStudent.js';
import markAttendence1 from '../user-controller/markAttendence1.js';
import markAttendence2 from '../user-controller/markAttendence2.js';
import markAttendence3 from '../user-controller/markAttendence3.js';
import markAttendence4 from '../user-controller/markAttendence4.js';




import verifyToken from '../middleware/verifyToken.js';
import AdminLogin from '../user-controller/facultyAuth.js';

const Router = express.Router();



// Router.post('/addstudent',verifyToken,[
//     body('rollno').isLength({min:10,max:13}).withMessage("invalid roll no"),
//     body('name').isLength({min:3}).withMessage("please enter the valid name"),
//     body('email').isEmail().withMessage("invalid email "),
//     body('section').isLength({max:1,min:1}).withMessage("enter the valid section"),
//     body('year').isLength({min:1}).withMessage("enter the valid year"),
//     body('branch').isLength({min:2}).withMessage("enter the valid branch"),

// ],addStudent);

Router.post('/adminlogin',verifyToken,AdminLogin)
Router.post('/addstudent',verifyToken,addStudent)
Router.get('/getstudent',verifyToken,getStudent)
Router.post('/updatestudent',verifyToken,updateStudent)
Router.post('/markattendece1',verifyToken,markAttendence1);
Router.post('/markattendece2',verifyToken,markAttendence2);
Router.post('/markattendece3',verifyToken,markAttendence3);
Router.post('/markattendece4',verifyToken,markAttendence4);



export default Router;