const write = require('./write')
const read = require('./read')
const add = require('./add')
const del = require('./del')
const update = require('./update')

const data = process.argv

// write(data)
var note = {}

if(data[2] === "add"){
     note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }

    var oldNote = read()

    add(note, oldNote)
}

if(data[2]==="read"){
    const present = require('./present')

    present(read())
}

if(data[2] === "delete"){
    let id = data[3]

    let oldNote = read()
    del(id, oldNote)
    console.log(read())
}

if(data[2] === "update"){
    let id = data[3]


    const oldNote = read()
    update(id, oldNote)
    console.log(read())
}

// console.log(read())