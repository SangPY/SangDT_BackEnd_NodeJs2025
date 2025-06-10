const getHomepage = (req, res) => {
    res.send('Hello World! MVC')
}

const getSang = (req, res) => {
  res.send('Hello Sang routes nodemon! MVC')
}

const getNodejs = (req, res) => {
  res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getSang,
    getNodejs
}