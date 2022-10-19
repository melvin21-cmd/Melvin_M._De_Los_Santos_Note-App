const fs =require('fs')

const write = function(){
    fs.writeFileSync('note.txt', "Hey!")
}

module.exports = write