require('dotenv').config()
const User = require('./model')
const { connect } = require('mongoose')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')


// Post Signup
const signup = async (req, res) => {

    const { username, password, email, contact, address, role } = req.body;

    if (!username || !password || !email || !contact || !address ) {
        res.json({
            message: "Missing Required Field"
        })
    }
    else {
        try {
            await connect(process.env.MONGO_URL)
            console.log("DB Connected")

            const checkExist = await User.exists({ email: email })

            if (checkExist) {
                res.json({
                    message: "User already Exist"
                })
            }
            else {
                await User.create({ username, email, password: await hash(password, 12), contact, address, role })
                console.log("User Created")

                res.status(201).json({
                    message: "Signup Successfully"
                })
            }
        }
        catch (error) {
            console.error("Error during user sign-up:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}


// Post Login
const login = async (req, res) => {
    const login = { email, password } = req.body;

    if (!email || !password) {
        res.json({
            message: "Missing Required Field"
        })
    }
    else {
        try {
            await connect(process.env.MONGO_URL)
            console.log("DB Connected")

            const checkExistUser = await User.findOne({ email: email })

            if (!checkExistUser) {
                res.status(404).json({
                    message: "User not found"
                })
            }
            else {
                const decryptPass = await compare(password, checkExistUser.password)
                console.log(decryptPass)

                if (email == checkExistUser.email && decryptPass) {
                    console.log("User Logged In")
                    const token = sign(
                        {
                            username: checkExistUser.username,
                            id: checkExistUser._id,
                            email: checkExistUser.email,
                            profile: checkExistUser.profile,
                            contact: checkExistUser.contact,
                            address: checkExistUser.address,
                            role: checkExistUser.role
                        }
                        ,
                        process.env.JWT_SECRET,
                        
                    )
                    
                    res.status(200).json({
                        message: "Successfully Logged In",
                        token: token
                    })
                    
                }
                else {
                    res.json({
                        message: "Invalid Credentials"
                    })
                }

            }
        }
        catch (error) {
            console.error("Error during user Login", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}


//Get User By email
const getUserByEmail = async (req, res) => {
    const login = { email } = req.body;

    try {
        await connect(process.env.MONGO_URL)

        const checkExistBrand = await User.findOne({ email })

        if (!checkExistBrand) {
            res.status(404).json({
                message: "User not Exists"
            })
        }
        else {
            res.json({
                checkExistBrand
            })
        }
    }
    catch (error) {
        console.error("Error fetching user by email:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}


//Get User By ID
const getUserByID = async (req, res) => {
    const login = { _id } = req.query;

    try {
        await connect(process.env.MONGO_URL)
        const checkUserID = await User.findOne({ _id })

        if (!checkUserID) {
            res.status(404).json({
                message: "User not found"
            })
        }
        else {
            res.json({
                user: checkUserID
            })
        }
    }
    catch (error) {
        console.error("Error fetching User By ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}


//Get All Users
const getAllUsers = async (req, res) => {
    try {
        await connect(process.env.MONGO_URL)
        const users = await User.find();
        res.json({ users });
    }
    catch (error) {
        console.error("Error fetching all users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Delete User
const deleteUser = async (req, res) => {
    const { _id } = req.body
    try {
        await connect(process.env.MONGO_URL)
        await User.deleteOne({ _id });
        const users = await User.find();

        res.json({
            message: "User Deleted Successfully",
            users
        });
    }
    catch (error) {
        console.error("Error Deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}


//Update User
const updateUser = async (req, res) => {
    const { _id, username, email, profile } = req.body

    const filter = { _id };
    const update = { username, email, profile };

    try {
        await connect(process.env.MONGO_URL)
        await User.findOneAndUpdate(filter, update, {
            new: true
        });
        const users = await User.find();

        res.json({
            message: "User Updated Successfully",
            users
        });
    }
    catch (error) {
        console.error("Error Updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { signup, login, getAllUsers, getUserByEmail, getUserByID, deleteUser, updateUser }