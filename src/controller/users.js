const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try{
        const [data] = await UsersModel.getAllMahasiswa();

        res.json({
            message: 'GET All Mahasiswa Success',
            data: data
        })  
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const [data] = await UsersModel.getMahasiswaById(id);
        res.json({
            message: 'Get Data Mahasiswa By Id Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;

    if(!body.nama){
        return res.status(400).json({
            message: 'Anda harus mengisi Nama',
            data: null
        })
    }

    try {
        await UsersModel.createNewMahasiswa(body);
        res.status(201).json({
            message: 'Create New Data Mahasiswa Success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await UsersModel.updateMahasiswa(body, id);
        res.json({
            message: 'UPDATE Data Mahasiswa Success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }    
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await UsersModel.deleteMahasiswa(id);
        res.json({
            message: 'DELETE Data Mahasiswa Success',
            data: id
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    getUserById,
    updateUser,
    deleteUser,
}