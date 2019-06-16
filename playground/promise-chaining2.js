require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('5d050171a6cca523e8b6dba9').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed:false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deletTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed:false })
    return count
}

deletTaskAndCount('5d050bbf103aa92d8002d65f').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
