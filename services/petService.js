const Pet = require("../models/petModel");
const { getMood } = require("../utils/moodLogic");

// Create a new pet
const addPet = async (data) => {
  const pet = await Pet.create(data);
  return { ...pet.toObject(), mood: getMood(pet.createdAt) };
};

// Retrieve all pets, optionally filter by mood
const getAllPets = async (moodFilter) => {
  const pets = await Pet.find();
  const enriched = pets.map((p) => {
    const obj = p.toObject();
    obj.mood = getMood(obj.createdAt);
    return obj;
  });
  return moodFilter
    ? enriched.filter((p) => p.mood.toLowerCase() === moodFilter.toLowerCase())
    : enriched;
};

// Retrieve pet by ID
const getPetById = async (id) => {
  const pet = await Pet.findById(id);
  if (!pet) return null;
  const obj = pet.toObject();
  obj.mood = getMood(obj.createdAt);
  return obj;
};

// Update pet profile
const updatePet = async (id, updates) => {
  const pet = await Pet.findByIdAndUpdate(id, updates, { new: true });
  if (!pet) return null;
  const obj = pet.toObject();
  obj.mood = getMood(obj.createdAt);
  return obj;
};

// Mark a pet as adopted
const adoptPet = async (id) => {
  const pet = await Pet.findById(id);
  if (!pet) return null;
  pet.adopted = true;
  pet.adoption_date = Date.now();
  await pet.save();
  const obj = pet.toObject();
  obj.mood = getMood(obj.createdAt);
  return obj;
};

// Delete a pet
const deletePet = async (id) => {
  return await Pet.findByIdAndDelete(id);
};

module.exports = {
  addPet,
  getAllPets,
  getPetById,
  updatePet,
  adoptPet,
  deletePet,
};
