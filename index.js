const express = require ("express")
const webApp = express()
webApp.set("view engine","ejs")

webApp.get('/', (req,res) => {
    res.render("pages/index")
})


webApp.listen(80)