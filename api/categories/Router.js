const express = require('express')
const router = express.Router()

const { createCategory, getAllCategory, categoryByName, getCategoryByID, deleteCategory, updateCategory } = require('./Controller')

router.post('/createcategory', createCategory)
router.get('/getallcategory', getAllCategory);
router.get('/categorybyname', categoryByName)
router.get('/getcategorybyid', getCategoryByID);
router.delete('/deletecategory', deleteCategory);
router.put('/updatecategory', updateCategory);


module.exports = router