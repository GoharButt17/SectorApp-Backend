const mongoose = require('mongoose');

const sectorSchema = new mongoose.Schema({
    userName: { type: String, default: '' },
    sectorName: { type: String, default: '' },
    termsAndConditions: { type: Boolean, default: false },
    Date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Sector', sectorSchema);