import express from 'express';
import {body} from 'express-validator';
import addStudent from '../user-controller/addStudent.js';
import getStudent from '../user-controller/getStudent.js';
import markAttendenceCS from '../user-controller/markAttendenceCS.js';
import markAttendenceME from '../user-controller/markAttendenceME.js';
import markAttendenceEE from '../user-controller/markAttendenceEE.js';
import markAttendenceEC from '../user-controller/markAttendenceEC.js';

import verifyToken from '../middleware/verifyToken.js';

const Router = express.Router();

import facultyLogin from '../user-controller/facultyAuth.js'


Router.post('/facultylogin', facultyLogin);

Router.post('/addstudent',verifyToken,[
    body('rollno').isLength({min:10,max:13}).withMessage("invalid roll no"),
    body('name').isLength({min:3}).withMessage("please enter the valid name"),
    body('email').isEmail().withMessage("invalid email "),
    body('section').isLength({max:1,min:1}).withMessage("enter the valid section"),
    body('year').isLength({min:1}).withMessage("enter the valid year"),
    body('branch').isLength({min:2}).withMessage("enter the valid branch"),

],addStudent);

Router.get('/getstudent',verifyToken,getStudent)
Router.post('/markattendence/cs',verifyToken,markAttendenceCS);
Router.post('/markattendence/ec',verifyToken,markAttendenceEC);
Router.post('/markattendence/ee',verifyToken,markAttendenceEE);
Router.post('/markattendence/me',verifyToken,markAttendenceME);
export default Router;