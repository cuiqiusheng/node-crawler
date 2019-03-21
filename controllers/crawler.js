const superagent = require('superagent')
const parseResKGW = require('../utils/parseResKGW')
const parseResDB = require('../utils/parseResDB')

function crawler(url) {
  let data = []
  return new Promise((resolve) => {
    superagent
      .get(url)
      .end((err, res) => {
        if (err) {
          console.log('[抓取失败] - ', err)
        } else {
          data = parseResDB(res)
          resolve(data)
        }
      })
  })
}

module.exports = crawler
