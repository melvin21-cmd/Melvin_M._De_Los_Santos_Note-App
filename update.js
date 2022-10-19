const fs = require('fs')

const data = process.argv

const update = function(id, oldNote){
    const note = JSON.parse(oldNote)
    const newNote = note.map(function(n){
        if(n.id === id){
            
            n = {
                id: data[3],
                title: data[4],
                body: data[5]
            }

            return n
        }
        if(n)

        return n
    })

    fs.writeFileSync('note.txt', JSON.stringify(newNote))
}

module.exports = update