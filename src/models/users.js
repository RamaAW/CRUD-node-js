const dbPool = require('../config/database');


const getAllMahasiswa = () => {
    const SQLQuery = 'SELECT * FROM mahasiswa';

    return dbPool.execute(SQLQuery);
}

const getMahasiswaById = (id) => {
    const SQLQuery = `SELECT * FROM mahasiswa WHERE id=${id}`;
    
    return dbPool.execute(SQLQuery);
}

const createNewMahasiswa = (body) => {
    const SQLQuery = `  INSERT INTO mahasiswa (nama, universitas, prodi, nim, alamat) 
                        VALUES('${body.nama}', '${body.universitas}', '${body.prodi}', '${body.nim}', '${body.alamat}')`
    return dbPool.execute(SQLQuery);
}

const updateMahasiswa = (body, id) => {
    const SQLQuery = `  UPDATE mahasiswa 
                        SET nama='${body.nama}', universitas='${body.universitas}', prodi='${body.prodi}', nim='${body.nim}', alamat='${body.alamat}' 
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const deleteMahasiswa = (id) => {
    const SQLQuery = `DELETE FROM mahasiswa WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllMahasiswa,
    createNewMahasiswa,
    updateMahasiswa,
    deleteMahasiswa,
    getMahasiswaById
}