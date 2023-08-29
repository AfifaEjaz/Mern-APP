const Category = require('./model')
const { connect } = require('mongoose')


// Post Category
const createCategory = async (req, res) =>{
    const { name, image } = req.body

    if (!name || !image ) {
        res.json({
            message: "Missing Required Field"
        })
    }
    else{
        try {
            await connect(process.env.MONGO_URL)
            console.log("DB Connected")
    
            const checkExist = await Category.findOne({ name: name })
    
            if(checkExist){
                res.json({
                    message: "Category already Exist"
                })
            }
            else{
                await Category.create({ name, image })
                const categories = await Category.find()
                console.log("Success")
    
                res.status(201).json({
                    message: "Category Created Successfully",
                    categories
                })
            }
        } catch (error) {
            console.error("Error during Category creation:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
   
}

//Get All Categories
const getAllCategory = async (req, res) => {
    try {
        await connect(process.env.MONGO_URL)
        const category = await Category.find();
        res.json({ category });
    }
    catch (error) {
        console.error("Error fetching all Categories:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get Category by category name
const categoryByName = async (req, res) => {
    const { name } = req.query

    try {
        await connect(process.env.MONGO_URL)
        console.log("DB Connected")

        const checkExistCategory = await Category.findOne({ name: name })

        if(!checkExistCategory){
            res.status(404).json({
                message: "Category Not Found"
            })
        }
        else{
            res.json({
                Category: checkExistCategory
            })
        }
    } 
    catch (error) {
        console.log("Error fetching Category by category name:", error)
        res.status(500).json({ message: "Internal server error" });
    }
}


// Get Category by ID
const getCategoryByID = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URL)
        console.log("DB connected")
       
        const checkCategoryID = await Category.findOne({ _id })

        if (!checkCategoryID) {
            res.status(404).json({
                message: "Category not found"
            })
        }
        else {
            res.json({
                checkCategoryID
            })
        }
    }
    catch (error) {
        console.error("Error fetching Category By ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//Delete Category
const deleteCategory = async (req, res) => {
    const { name } = req.body
    try {
        await connect(process.env.MONGO_URL)
         await Category.deleteOne({ name });
         const category = await Category.find();
        res.status(200).json({ 
            message: "Category Deleted Successfully",
            category
         });
    }
    catch (error) {
        console.error("Error Deleting Category:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//Update Category
const updateCategory = async (req, res) => {

    const { _id, name, image } = req.body

    const filter = { _id };
    const update = { name, image };

    try {
        await connect(process.env.MONGO_URL)
        await Category.findOneAndUpdate( filter, update, {
            new: true
        });
        
        const category = await Category.find();
        res.json({ 
            message: "Category Updated Successfully",
            category
         });
    }
    catch (error) {
        console.error("Error Updating Category:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { createCategory, getAllCategory, categoryByName, getCategoryByID, deleteCategory, updateCategory }