const pool = require('../config/db')

module.exports = {
  addProject: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO project SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getProjectByIdComp: (idComp) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM project WHERE id_company = ?', idComp,(err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
 
  
}