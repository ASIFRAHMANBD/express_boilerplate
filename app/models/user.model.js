const sql = require("./db.js");

const User = function(user) {
    this.username = user.username;
    this.name = user.name;
    this.surname = user.surname;
    this.email = user.email;
    this.contact_no = user.contact_no;
    this.password = user.password;
    this.gender = user.gender;
    this.job_title = user.job_title;
    this.country = user.country;
    this.city = user.city;
    this.description = user.description;
    this.web_page = user.web_page;
    this.icq_number = user.icq_number;
    this.skypee_id = user.skypee_id;
    this.aim_id = user.aim_id;
    this.yahoo_id = user.yahoo_id;
    this.msn_id = user.msn_id;
    this.id_number = user.id_number;
    this.institution = user.institution;
    this.department = user.department;
    this.address = user.address;
    this.interests = user.interests;
    this.profile_photo = user.profile_photo;
    this.email_verified = user.email_verified;
  };

  User.create = (newuser, result) => {
    sql.query("INSERT INTO users SET ?", newuser, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        console.log("created user: ", { id: res.insertId, ...newuser });
        result(null, { id: res.insertId, ...newuser });
    });
  };

  User.find = (email, result) => {
    let query = `SELECT * FROM users WHERE email ='${email}'`

    sql.query(query, (err, res) => {
        if(res.length){
           result(null, res);
        }else{
          result(null, null);
        }

    });
  };

  User.findById = (id, result) => {
    let query = `SELECT * FROM users WHERE id ='${id}'`
    sql.query(query, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        result(null, res);
    });
  };

  User.findByEmailOrUserName = (data, result) => {
    let query = `SELECT * FROM users WHERE email ='${data.email}}' OR username='${data.username}'`
    sql.query(query, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        result(null, res);
    });
  };

module.exports = User;