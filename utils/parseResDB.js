/**
 * 豆瓣电影排名
 */
const cheerio = require('cheerio')

function parseRes(res) {
  const $ = cheerio.load(res.text)
  const data = []

  $('ol.grid_view li').each((index, ele) => {
    const item = {
      '排名': index + 1,
      '电影名': $(ele).find('div.hd').children('a').children('span:nth-child(1)').text(),
      '评分': $(ele).find('div.star').children('span.rating_num').text(),
      '评价数': $(ele).find('div.star').children('span:nth-child(4)').text(),
    }
    data.push(item)
  })
  return data
}

module.exports = parseRes
