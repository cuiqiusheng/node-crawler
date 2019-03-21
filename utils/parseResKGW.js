/**
 * 看国外
 */
const cheerio = require('cheerio')

function parseRes(res) {
  const data = []
  const $ = cheerio.load(res.text)
  // $('div.area.left h2 a').each((_, ele) => {
  //   const item = {
  //     area: $(ele).text(),
  //     href: $(ele).attr('href'),
  //   }
  //   data.push(item)
  // })
  $('div.areabox').each((_, ele) => {
    const domArea = $(ele).children('.flags').children('h2').children('a')
    const area = domArea.text()
    const href = domArea.attr('href')

    const countries = []
    $(ele).find('ul.flaglist').children().each((_, ele2) => {
      $(ele2).children().each((_, ele3) => {
        countries.push({
          name: $(ele3).children('span').text(),
          flag: `https://www.kanguowai.com${$(ele3).children('img').attr('src')}`,
        })
      })
    })
    data.push({
      area,
      href,
      countries,
    })
  })
  return data
}

module.exports = parseRes
