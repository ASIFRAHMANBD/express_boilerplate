const { date } = require("joi");
const Course = require("../models/course.model.js");


exports.create = async(req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a Tutorial
      const course = new Course({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        user_id: req.body.user_id,
        course_category_id: req.body.course_category_id
      });

      Course.create(course, (err, data) => {
        if (err)
          res.status(500).send({
            message: "Some error occurred while creating the Course."
            });
        else 
          res.status(200).send({
            message: "Course created",
            data:data
          });
      });

};


exports.list = async(req, res) => {
    // Create a Tutorial
    const course = new Course({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      user_id: req.body.user_id,
      course_category_id: req.body.course_category_id
    });

    Course.list( (err, data) => {
      if (err)
        res.status(500).send({
          message: "Some error occurred while creating the Course."
          });
      else 
        res.status(200).send({
          message: "Course list",
          data:data
        });
    });

};