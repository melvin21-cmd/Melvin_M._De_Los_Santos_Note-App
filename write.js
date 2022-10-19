const fs =require('fs')

const write = function(data="How's the day?"){
    fs.writeFileSync('note.txt', data)
}

module.exports = write