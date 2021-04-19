import Navigation from '../component_objects/Navigation.js'

function saveImage(){
  browser.saveScreenshot(__dirname + '/snapshots/' + new Date() + '.png');
}

describe('Search : Find some books', () => {
  it('reaches the homepage', () => {
    Navigation.open()
    saveImage(new Date())
  })

  it('searches for "qa testing" and submits', () => {
    Navigation.searchBar.click()
    saveImage(new Date())
    Navigation.searchBar.keys('qa testing')
    saveImage(new Date())
    Navigation.submitSearch.click()
    saveImage(new Date())
  })

  it('Shows a positive number of results', () => {
    const results = $("//span[contains(text(), 'results for')]").getText()
    const integers = results.split(' ').filter(function (int) {
      return int.match(/\d+/g)
    })
    const cleanInteger = integers[1].replace(/,/g, '')
    expect(parseInt(cleanInteger)).to.be.above(0)
    saveImage(new Date())
  })
})

