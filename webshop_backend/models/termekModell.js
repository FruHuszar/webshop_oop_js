const db = require("../config/db");

const Termek = {
  getAll: async () => {
    try {
      const [rows] = await db.query("SELECT * FROM Termek");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result] = await db.query("DELETE FROM Termek WHERE id = ?", [id]);
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Termek;
