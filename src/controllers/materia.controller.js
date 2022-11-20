import { getConnection } from "../database/database";

const getMaterias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name FROM materia");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getMateria = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name FROM materia WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addMateria = async (req, res) => {
    try {
        const { name} = req.body;

        if (name === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const language = { name};
        const connection = await getConnection();
        await connection.query("INSERT INTO materia SET ?", language);
        res.json({ message: "Materia added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateMateria = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (id === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const language = { name };
        const connection = await getConnection();
        const result = await connection.query("UPDATE materia SET ? WHERE id = ?", [language, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteMateria = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM materia WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getMaterias,
    getMateria,
    addMateria,
    updateMateria,
    deleteMateria
};