import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados where id = ? ", [
      req.params.id,
    ]);
    if (rows.length <= 0) {
      return res.status(404).json({
        message: "Empleado no encontrado",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const postEmployees = async (req, res) => {
  const { nombre, salario } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO empleados (nombre, salario) VALUES (?, ?)",
      [nombre, salario]
    );
    res.send({
      id: rows.insertId,
      nombre,
      salario,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM empleados where id = ? ", [
      req.params.id,
    ]);
    console.log(result);
    if (result.affectedRows > 0) {
      return res.send("El empleado se ha borrado correctamente");
    }
    res.status(404).json({ message: "Empleado no encontrado" });
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const putEmployees = async (req, res) => {
  const { id } = req.params;
  const { nombre, salario } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) where id = ?",
      [nombre, salario, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Empleado no encontrado",
      });

    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};
