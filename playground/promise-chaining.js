require('../src/db/mongoose')
const User = require('../src/models/user')

//ObjectId("5d0507ffdb283e3eccb7ed85")

// User.findByIdAndUpdate('5d0509a79a477846e8cf91fc', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age:1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = User.findByIdAndUpdate(id,{ age })
    const count = User.countDocuments({ age })
    return count
}

updateAgeAndCount('5d0509a79a477846e8cf91fc', 1).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})