const mongoose = require("mongoose");

const SpotsModel = mongoose.model(
  "climbingSpots",
  {
    id: String,
    spot: String,
    pays: String,
    region: String,
    departement: String,
    ville: String,
    hauteur: String,
    nb_lignes: Number,
    meileures_saisons: String,
    cotations: String,
    approche: String,
    orientation: String,
    hauteur_min: Number,
    hauteur_max: Number,
    hauteur_moyenne: Number,
    type: String,
    latitude: Number,
    longitude: Number,
  },
  "Spots"
);

module.exports = { SpotsModel };
