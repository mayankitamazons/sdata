var express = require('express'),
bodyParser = require('body-parser');
var multer = require('multer');
const request=require('request');

// to save data
const User=require('../Model/usermodel');
const Judge=require('../Model/judgemodel');
const router=express.Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
	 
	  // var upload_path=req.upload_path;
	  
    cb(null, './project_summery');  
    // cb(null, upload_path);  
  },
  filename: function (req, file, cb) {
	  // console.log(file);
	  // return false;
    cb(null,  file.fieldname + '_' + Date.now()+'.'+file.originalname.split('.')[file.originalname.split('.').length -1])
  }
})
 
// var upload = multer({ storage: storage })
var upload = multer({ dest: 'uploads/' });
router.post('/register',upload.fields([{
           name: 'summery', maxCount: 1
         }, {
           name: 'form', maxCount: 1
         }]),function(req,res,next){
	 // return false;    
	 
	if(req.body)
	{
		console.log(req.body);
		  var tdata= User.findOne().sort({user_id:-1}).select({_id:1,user_id:1}).then(function(tdata){
			    // console.log(tdata);
			    if (tdata) {
                   var countuser=tdata.user_id+1;
                 }else {
                   var countuser=1;
                 }

                   if (countuser=='') {
                       var countuser=1;
                   }
                    req.body.user_id=countuser;
                   req.body._id=countuser;
				 //  console.log(req.body);
				    var project_id=req.project_id=Math.floor(1000 + Math.random() * 9000);
				 User.create(req.body).then(function(newuser){
					 if(newuser)
					 {
						// var user_email=req.body.email;
						// var user_email='click4mayank@gmail.com';
						var user_email=newuser.email;
						// lib to send email 
						var text="";
						var nodemailer = require('nodemailer');
						var transporter = nodemailer.createTransport({
										  service: 'gmail',
										  auth: {
											user: 'click4mayank@gmail.com',
											pass: 'MayankDev@12'
										  }
										});
						 // setup email data with unicode symbols
						let mailOptions = {
							 from: 'click4mayank@gmail.com', // sender address
							to:user_email, // list of receivers
							subject: 'Registration Mail', // Subject line
							//text: 'Hello world?', // plain text body
							html: '<div>HI,</br><p>Thank you for registering in Upper fair at msseicencefairs.com. Every Project is assigned with a unique project Id, which acts as team’s address till the result day of science fair. Assigned Project ID:'+project_id+'</p><p>For any other questions email us at Region1msef@gmail.com</p></div>' // html body
						};
						 transporter.sendMail(mailOptions, function(error, info){
												  if (error) {
													console.log(error);
												  } else {
													console.log('Email sent: ' + info.response);
												  }
												}); 
						res.send({"status":true,"code":200,"message":"Registration done succcessfully"});
					 }
					 else
					 {
						res.send({"status":false,"code":404,"message":"Failed to Register User Try Again"}); 
					 }
					 
				});
		  });
      		   
       
	}
	else
	{
		res.send({"status":false,"code":404,"message":"Required Data is missing"});
	}
});
router.post('/uploaddoc',function(req,res,next){
	if(req.body)
	{
		console.log(req.body);
		var upload = multer({
		storage: storage
		}).single('summerydoc')
		upload(req, res, function(err,result) {
			res.send({"status":true,"code":200,"file":req.file.filename});
			// res.end();
			// console.log(req.file.filename);
		})
		

	}
	else
	{   
		res.send({"status":false,"code":404,"message":"Required Data is missing"});
	}

});
router.post('/contact',upload.fields([{
           name: 'summery', maxCount: 1
         }, {
           name: 'form', maxCount: 1
         }]),function(req,res,next){
	if(req.body)
	{   
		const Contact=require('../Model/contactmodel');
		var tdata= Contact.findOne().sort({_id:-1}).select({_id:1}).then(function(tdata){
		if (tdata) {
                   var countuser=tdata._id+1;
                 }else {
                   var countuser=1;
                 }

                   if (countuser=='') {
                       var countuser=1;
                   }
                    // req.body.user_id=countuser;
                   req.body._id=countuser;
				     console.log(req.body);
					Contact.create(req.body).then(function(newuser){
					 if(newuser)
					 {
						 var user_email=newuser.email;
						// lib to send email 
						var text="";
						var nodemailer = require('nodemailer');
						var transporter = nodemailer.createTransport({
										  service: 'gmail',
										  auth: {
											user: 'click4mayank@gmail.com',
											pass: 'MayankDev@12'
										  }
										});
						 // setup email data with unicode symbols
						let mailOptions = {
							 from: 'click4mayank@gmail.com', // sender address
							to:user_email, // list of receivers
							subject: 'Registration Mail', // Subject line
							//text: 'Hello world?', // plain text body
							html: '<div>HI,</br><p>Thank you for contacign with us</p></div>' // html body
						};
						 transporter.sendMail(mailOptions, function(error, info){
												  if (error) {
													console.log(error);
												  } else {
													console.log('Email sent: ' + info.response);
												  }
												}); 
						 res.send({"status":true,"code":200,"message":"Success"});
					 }
					 else
					 {
						res.send({"status":false,"code":404,"message":"Failed to create Contact"});
					 }
			});
		});
	}
	else
	{   
		res.send({"status":false,"code":404,"message":"Required Data is missing"});
	}
	
	
});
router.post('/judgeregister',upload.fields([{
           name: 'summery', maxCount: 1
         }, {
           name: 'form', maxCount: 1
         }]),function(req,res,next){
			 if(req.body)
			 {
				 var login_email=req.body.login_email;
				 // console.log(login_email);
				 Judge.findOne({login_email:login_email}).then(function(tdata){
					 if(tdata)
					{
						console.log(req.body);
							res.send({"status":false,"code":400,"message":"Email id already Exit"});
					}
					else
					{
						   var tdata= Judge.findOne().sort({_id:-1}).select({_id:1}).then(function(tdata){
			    // console.log(tdata);
			    if (tdata) {
                   var countuser=tdata._id+1;
                 }else {
                   var countuser=1;
                 }

                   if (countuser=='') {
                       var countuser=1;
                   }
                   
						req.body._id=countuser;
				    Judge.create(req.body).then(function(newuser){
						if(newuser)
						{
							var admin_email="click4maynak@gmail.com";
							
							var nodemailer = require('nodemailer');
							var transporter = nodemailer.createTransport({
										  service: 'gmail',
										  auth: {
											user: 'click4mayank@gmail.com',
											pass: 'MayankDev@12'
										  }
										});
							var category_list=newuser.category_1+','+newuser.category_2+','+newuser.category_3+','+newuser.category_4;
							 // setup email data with unicode symbols
							let mailOptions = {
								 from: 'click4mayank@gmail.com', // sender address
								to:admin_email, // list of receivers
								subject: 'Registration Mail', // Subject line
								//text: 'Hello world?', // plain text body
								html: '<div>HI,</br><p>New Judge Register Deail is as below </br> Judge Name '+newuser.name+'<br/>Email '+newuser.login_email+'</br> Category List: '+category_list+'</p></div>' // html body
							};
							 transporter.sendMail(mailOptions, function(error, info){
													  if (error) {
														console.log(error);
													  } else {
														console.log('Email sent: ' + info.response);
												  }
												}); 
							res.send({"status":true,"code":200,"message":"Email fresh","user":newuser});
						}
						  });
						   });
						 
						
					}
				 });
			 }
			 else
			 {
				 res.send({"status":false,"code":404,"message":"Required Data is missing"});
			 }
			
		 });
	router.get('/userlist',upload.fields([{
           name: 'summery', maxCount: 1
         }, {
           name: 'form', maxCount: 1
         }]),function(req,res,next){
			 User.find({}).sort({user_id:-1}).then(function(userdata){
			 if(userdata)
			 {
				res.send({"status":true,"code":200,"message":"Data found","data":userdata});
			 }
			  else
			 {
				 res.send({"status":false,"code":404,"message":"No User Register Yet"});
			 }
			 });
		 });
	// email check 
	router.get('/emailcheck',upload.fields([{
           name: 'summery', maxCount: 1
         }, {
           name: 'form', maxCount: 1
         }]),function(req,res,next){
			 var user_email=req.query.email;
			 if(req.body)
			 {
				 User.findOne({email:user_email}).sort({user_id:-1}).then(function(userdata){
					 if(userdata)
					 {
						res.send({"status":true,"code":200,"message":"Email Address is already used","s_code":201});
					 }
					  else
					 {
						 res.send({"status":true,"code":200,"message":"Email Not used","s_code":200});
					 }
				 }); 
			 }
			 else
			 {
				res.send({"status":false,"code":404,"message":"No User Register Yet"}); 
			 }
			
		 });   
	router.post('/judgeforgot',upload.fields([{
           name: 'summery', maxCount: 1
         }, {
           name: 'form', maxCount: 1
         }]),function(req,res,next){
			 if(req.body)
			 {
				 var login_email=req.body.email;
				 Judge.findOne({login_email:login_email}).then(function(tdata){
					 if(tdata)
					 {
						 var nodemailer = require('nodemailer');
							var transporter = nodemailer.createTransport({
										  service: 'gmail',
										  auth: {
											user: 'click4mayank@gmail.com',
											pass: 'MayankDev@12'
										  }
										});
						 let mailOptions = {
								 from: 'click4mayank@gmail.com', // sender address
								to:login_email, // list of receivers
								subject: 'Registration Mail', // Subject line
								//text: 'Hello world?', // plain text body
								html: '<div>HI,</br><p>Account detail is as below:  Email :'+login_email+' Password :'+tdata.password+'</p></div>' // html body
							};
							 transporter.sendMail(mailOptions, function(error, info){
													  if (error) {
														console.log(error);
													  } else {
														console.log('Email sent: ' + info.response);
												  }
												}); 
						 res.send({"status":true,"code":200,"message":"Detail are shared over email"}); 
					 }
					 else
					 {
						 res.send({"status":false,"code":404,"message":"Email id not found"}); 
					 }
				 });
			 }
			 else
			 {
				 res.send({"status":false,"code":404,"message":"Required Parameter missing"}); 
			 }
		 });

module.exports=router;