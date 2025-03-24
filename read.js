import fs from'fs'

const userFromJson = fs.readFileSync('user.json', 'utf-8')

const userJS = JSON.parse(userFromJson)

console.log(userJS)