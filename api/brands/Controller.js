const Brand = require('./model')
const { connect } = require('mongoose')


// Post Brand
const createBrand = async (req, res) => {

    const { brandname, logo } = req.body;
    if (!brandname || !logo) {
        res.json({
            message: "Missing Required Field"
        })
    }
    else {
        try {
            await connect(process.env.MONGO_URL)
            console.log("DB Connected")

            const checkExist = await Brand.findOne({ brandname: brandname })

            if (checkExist) {
                res.json({
                    message: "Brand already Exist"
                })
            }
            else {
                await Brand.create({ brandname, logo })
                const brand = await Brand.find()

                console.log("Success")

                res.status(201).json({
                    message: "Brand Created Successfully",
                    brand
                })
            }
        }
        catch (error) {
            console.error("Error during Brand creation:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}

//Get All Brands
const getAllBrands = async (req, res) => {
    try {
        await connect(process.env.MONGO_URL)
        const brand = await Brand.find();
        res.json({ brand });
    }
    catch (error) {
        console.error("Error fetching all Brands:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get Brand By Name
const brandByName = async (req, res) => {
    const { brandname } = req.query;

    try {
        await connect(process.env.MONGO_URL)

        const checkExisbrand = await Brand.findOne({ brandname: brandname })

        if (!checkExisbrand) {
            res.status(404).json({
                message: "Brand not found"
            })
        }
        else {
            res.json({
                Brand: checkExisbrand
            })
        }
    }
    catch (error) {
        console.error("Error fetching brand by brand name:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get Brand By ID
const getBrandByID = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URL)
        const checkBrandID = await Brand.findOne({ _id })

        if (!checkBrandID) {
            res.status(404).json({
                message: "Brand not found"
            })
        }
        else {
            res.json({
                checkBrandID
            })
        }
    }
    catch (error) {
        console.error("Error fetching Brand By ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//Delete Brand
const deleteBrand = async (req, res) => {
    const { brandname } = req.body
    try {
        await connect(process.env.MONGO_URL)
        await Brand.deleteOne({ brandname });
        const brands = await Brand.find();

        res.json({
            message: "Brand Deleted Successfully",
            brands
        });
    }
    catch (error) {
        console.error("Error Deleting brand:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//Update Brand
const updateBrand = async (req, res) => {
    const { _id, brandname, logo } = req.body

    const filter = { _id };
    const update = { brandname, logo };

    try {
        await connect(process.env.MONGO_URL)
        await Brand.findOneAndUpdate(filter, update, {
            new: true
        });

        const brand = await Brand.find();
        res.json({
            message: "Brand Updated Successfully",
            brand
        });
    }
    catch (error) {
        console.error("Error Updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { createBrand, getAllBrands, brandByName, getBrandByID, deleteBrand, updateBrand }