// controllers/sectorsController.js
const Sector = require('../models/SectorSchema');

const getAllSectors = async (req, res) => {
    try {
        const sectors = await Sector.find(); 
        if (sectors.length > 0) {
            res.status(200).json({sectors});
        }
        else {
            res.status(404).json({Error : 'No Data Available'});
        }
    } catch (error) {
            res.status(500).json({Error : 'Internal Server Error'});
    }
};

const createSector = async (req, res) => {
    const { userName, sectorName, termsAndConditions } = req.body;
    try {
        if (!userName || !sectorName || !termsAndConditions) {
            return res.status(400).json({ Error: 'Please Fill all fields and agree to the Terms and Conditions' });
        }

        const savedSector = await new Sector({ userName, sectorName, termsAndConditions }).save();
        res.status(200).json({ "Sector Saved Successfully": savedSector });
    } catch (error) {
        res.status(500).json({ Error: 'Internal Server Error' });
    }
};


const deleteSector = async (req, res) => {
    const sectorId = req.params.id;

    try {
        const existingSector = await Sector.findByIdAndDelete(sectorId);
        if (!existingSector) {
            res.status(404).json({ Error: 'Invalid Sector' });
        } else {
            res.status(200).json({ 'Data Deleted Successfully': existingSector });
        }
    } catch (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
    }
};

const updateSector = async (req, res) => {
    try {
        const sectorId = req.params.id;
        const { userName, sectorName, termsAndConditions } = req.body;

        // Use { new: true } to get the updated document
        const updatedSector = await Sector.findByIdAndUpdate(
            sectorId,
            {
                $set: {
                    userName: userName || existingSector.userName,
                    sectorName: sectorName || existingSector.sectorName,
                    termsAndConditions: termsAndConditions || existingSector.termsAndConditions,
                    Date: new Date(),
                },
            },
            { new: true }
        );

        if (!updatedSector) {
            return res.status(404).json({ Error: 'Invalid Sector' });
        }

        res.status(200).json({ 'Sector Updated Successfully': updatedSector });
        } catch (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        }
};
module.exports = {
    getAllSectors,
    createSector,
    deleteSector,
    updateSector,
};
