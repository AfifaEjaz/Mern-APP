const express = require('express')
const router = express.Router()

const { createBrand, getAllBrands, brandByName, getBrandByID, deleteBrand, updateBrand } = require('./Controller')

router.post('/createbrand', createBrand)
router.get('/getallbrand', getAllBrands);
router.get('/brandbyname', brandByName)
router.get('/getbrandbyid', getBrandByID);
router.delete('/deletebrand', deleteBrand);
router.put('/updatebrand', updateBrand);


module.exports = router