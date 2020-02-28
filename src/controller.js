const repository = require("./repository.js")
module.exports = {
    getIndexPage: (req, res) => {
            if(repository.doesUserExist()){
                res.send("Pravin");
            }
            res.send("Pramod");
            
       
    }
}

