const db = require("../models");
const config = require("../config/auth.config");
const floor = require("../../models/floor");
const Op = db.Sequelize.Op;
const User = db.user;
const Role = db.role;
const Floor = db.floor;
const { getPagination, getPagingData }  = require('../helpers/pagination');


exports.create = async(req, res) => {
  
  // for (let index = 0; index < 70; index++) {
  //    Floor.create({
  //       name: `test data ${index}`,
  //     })
  //     .then(floor => {
  //         console.log('floor',floor)
  //         res.status(200).send("Create floor on db..");
  //     })
  //     .catch(err => {
  //       console.log('err',err)

  //     });
  // }
    Floor.create({
      name: req.body.name,
    })
    .then(floor => {
        console.log('floor',floor)
        res.status(200).send("Create floor on db..");
    })
    .catch(err => {
      console.log('err',err)

    });
   
};


exports.list = (req, res) => {
    const { page, size, title } = req.query;
    const name = req.query.name;

    var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;
    const { limit, offset } = getPagination(page, size);
    Floor.findAndCountAll({ where: condition, limit, offset })
      .then(data => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};


exports.findOne = (req, res) => {
  const id = req.params.id;
  Floor.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Floor with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Floor with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;
  Floor.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Floor was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Floor with id=${id}. Maybe Floor was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Floor with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;
  Floor.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Floor was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Floor with id=${id}. Maybe Floor was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Floor with id=" + id
      });
    });
};