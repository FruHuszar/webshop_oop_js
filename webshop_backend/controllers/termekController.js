const Termek = ({ getAll } = require("../models/termekModell"));

const termekController = {
  getAllTermek: async (req, res) => {
    try {
      const termekek = await Termek.getAll();

      res.json(termekek);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Hiba az adatok lekérésekor", error: error.message });
    }
  },
  deleteTermek: async (req, res) => {
    try {
      const id = req.params.id; // Az URL-ből vesszük ki az ID-t (pl: /api/termekek/5)
      await Termek.delete(id);
      res.json({ message: "Termék sikeresen törölve!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Hiba a törléskor", error: error.message });
    }
  },
};

module.exports = termekController;
