const getHomepage = (req, res) => {
    res.send('Hello World! MVC')
}

const getSang = (req, res) => {
  res.send('Hello Sang routes nodemon! MVC')
}

module.exports = {
    getHomepage,
    getSang
}