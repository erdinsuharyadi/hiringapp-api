const pool = require('../config/db')

module.exports = {
  getCompany: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM company', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addCompany: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO company SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateCompany: (data, companyId) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE company SET ? WHERE id_company = ?', [data, companyId], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteCompany: (companyId) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM company WHERE id_company = ?', companyId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findCompanyById: (companyId) => {
    return new Promise((resolve, reject) => {
      idCompany = `${companyId}`
      pool.query('SELECT * FROM company WHERE id_company = ?', [idCompany], (err,result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findCompanyByIdUser: (idUser) => {
    return new Promise((resolve, reject) => {
      id_user = `${idUser}`
      pool.query('SELECT * FROM company WHERE id_user = ?', [id_user], (err,result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findCompanyByUserName: (userName) => {
    return new Promise((resolve, reject) => {
      user = `${userName}`
      pool.query('SELECT * FROM v_company WHERE username = ?', [user], (err,result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  logoCompany: (data, companyId) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE company SET ? WHERE id_company = ?', [data, companyId], (err, result)=> {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }  
      })
    })
  },
  
}