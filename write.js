import fs from "fs"

const user = {id: 1, username: 'John', email: 'john@ode.org'}

const dataToSend = JSON.stringify(user) 

console.log(user)
console.log(dataToSend)

fs.writeFileSync('user.json', dataToSend, 'utf-8')

const userFromJson = JSON.parse(dataToSend)
console.log(userFromJson)