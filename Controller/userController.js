const User = require('../models/user')

const addUser = async (req, res) => {

    const ankit = await User.create({ firstName: "ANKIT", lastName: "sihag", age: 24 });

    console.log(ankit instanceof User)
    // console.log(ankit.firstName, ankit.lastName)


    // to update the table enteries
    await ankit.update({ firstName: "deepak", lastName: "boora" })

    await ankit.save();

    // to delete the table row
    // await ankit.destroy();

    console.log(ankit.toJSON())
    res.status(200).json(ankit.toJSON());
}


// Fetch data of all the users
const getUsers = async (req, res) => {

    const getData = await User.findAll({});
    res.status(200).json({ data: getData })

}


// Fetch data of single user
const getOne = async (req, res) => {
    const getSingle = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ data: getSingle })
}


// Create Data By Postman
const createUser = async (req, res) => {
    try {
        const dataCreate = req.body

        const postUser = await User.create(dataCreate)
        res.status(200).json({ data: postUser })

    } catch (error) {
        console.log(error)
    }
}



// BulkCreate   (when we have to create more than one row in table)

const createRows = async (req, res) => {
    try {
        const data = req.body

        const Datass = await User.bulkCreate(data)
        res.status(200).json({ data: Datass })
        console.log(Datass)

    } catch (error) {
        console.log(error)
    }
}


// Delete User By Id
const deleteUser = async (req, res) => {

    const deleteData = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ data: deleteData })
}


// Update Data By Id
const patchData = async (req, res) => {
    const updates = req.body
    const updateData = await User.update(updates, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ data: updateData })
}


module.exports = {
    addUser, getUsers, getOne, createUser, createRows,
    deleteUser, patchData
}
