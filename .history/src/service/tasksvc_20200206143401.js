const User = require('../ models / user')

const updateAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {
        age
    })
    const count = awaint
}