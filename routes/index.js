var express = require('express');
var router = express.Router();
var sectorsController = require('../controllers/sectorControllers');

router.get('/sectors', sectorsController.getAllSectors);
router.post('/sectors', sectorsController.createSector);
router.delete('/delSectors/:id', sectorsController.deleteSector);
router.put('/updateSectors/:id', sectorsController.updateSector);

module.exports = router;