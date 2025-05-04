const petService = require("../services/petService");

// POST /pets
const createPet = async (req, res) => {
  try {
    const pet = await petService.addPet(req.body);
    res.status(201).json(pet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET /pets
const getPets = async (req, res) => {
  try {
    const pets = await petService.getAllPets(req.query.mood);
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /pets/:id
const getPet = async (req, res) => {
  try {
    const pet = await petService.getPetById(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /pets/:id
const updatePetProfile = async (req, res) => {
  try {
    const pet = await petService.updatePet(req.params.id, req.body);
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.json(pet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PATCH /pets/:id/adopt
const adopt = async (req, res) => {
  try {
    const pet = await petService.adoptPet(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /pets/:id
const deletePetById = async (req, res) => {
  try {
    const pet = await petService.deletePet(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.json({ message: "Pet deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createPet,
  getPets,
  getPet,
  updatePetProfile,
  adopt,
  deletePetById,
};
