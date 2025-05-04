const express = require("express");
const router = express.Router();
const controller = require("../controllers/petController");

router.post("/pets", controller.createPet);
router.get("/pets", controller.getPets);
router.get("/pets/:id", controller.getPet);
router.put("/pets/:id", controller.updatePetProfile);
router.patch("/pets/:id/adopt", controller.adopt);
router.delete("/pets/:id", controller.deletePetById);

module.exports = router;
