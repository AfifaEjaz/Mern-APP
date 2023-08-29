const { connect } = require('mongoose')
const nodemailer = require("nodemailer");
require('dotenv').config()
var Mailgen = require('mailgen');
const Order = require('./model')

const demoMail = async (req, res) => {
    const { email, customerName } = req.body;

    if (!email || !customerName) {
        res.status(403).json({
            message: "Please provide all credentials"
        })
    }
    else {

        const config = {
            service: 'gmail',
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASSWORD
            }
        }

        const transporter = nodemailer.createTransport(config);

        var mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                // Appears in header & footer of e-mails
                name: 'BanoQabil',
                link: 'https://mailgen.js/'

            }
        });

        var mailGenEmail = {
            body: {
                name: customerName,
                intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
                table: {
                    data: [
                        {
                            name: customerName,
                            email: email,
                            token: "123456"
                        }
                    ]
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };

        const response = {
            from: process.env.NODEMAILER_EMAIL, // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: mailGenerator.generate(mailGenEmail), // html body
        }



        try {
            await transporter.sendMail(response);
            res.json({
                message: "Check Your Email"
            })
        }
        catch (error) {
            res.status(500).json({ error })

        }
    }


}

const addOrders = async (req, res) => {

    const { items, totalBill, customerName, customerEmail, customerContact, customerAddress, Status, Message } = req.body;

    if (!items || !totalBill || !customerName || !customerEmail || !customerContact || !customerAddress) {
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }
    else {
        try {
            await connect(process.env.MONGO_URL)
            console.log("DB Connected")

            const order = await Order.create({ items, totalBill, customerName, customerEmail, customerContact, customerAddress, Status, Message })
            const orders = await Order.find()

            //EMAIL
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                    user: process.env.NODEMAILER_EMAIL,
                    pass: process.env.NODEMAILER_PASSWORD
                }
            });

            //MAIL GEN SETUP
            var mailGenerator = new Mailgen({
                theme: 'default',
                product: {
                    // Appears in header & footer of e-mails
                    name: 'BanoQabil',
                    link: 'https://mailgen.js/'
                }
            });


            await transporter.sendMail({
                from: process.env.NODEMAILER_EMAIL, // sender address
                to: customerEmail, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: mailGenerator.generate({
                    body: {
                        name: customerName,
                        intro: 'Welcome to My store! We are very excited to have you.',
                        // table: {
                        //     data: [
                        //         {
                        //             name: customerName,
                        //             email: customerEmail,
                        //             TrackingId: order._id,
                        //             contact: customerContact,
                        //             address: customerAddress,
                        //             totalBill: totalBill,
                        //         }

                        //     ]
                        // },

                        table: [
                            {
                                // Optionally, add a title to each table.
                                title: 'Customer Details',
                                data: [
                                    {
                                        name: customerName,
                                        email: customerEmail,
                                        TrackingId: order._id,
                                        contact: customerContact,
                                        address: customerAddress,
                                    }
                                ]
                            },
                            {
                                // Optionally, add a title to each table.
                                title: 'Order Details',
                                data: [
                                    {
                                        item: items,
                                        description: 'Item 1 description',
                                        price: '$2.99',
                                        totalBill: totalBill
                                    }
                                ]
                            }
                        ],


                        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
                    }
                }), // html body
            });


            res.status(201).json({
                message: "Order Placed Successfully",
                TrackingId: order._id,
                orders

            })
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
}

const getOrderByID = async (req, res) => {
    const { _id } = req.params

    try {
        await connect(process.env.MONGO_URL)
        const order = await Order.findOne({ _id })
        res.json({ order })

    }
    catch (error) {
        res.status(500).message({ message: error.message })
    }

}

const getAllOrders = async (req, res) => {

    try {
        await connect(process.env.MONGO_URL)
        const orders = await Order.find()
        res.json({ orders })

    }
    catch (error) {
        console.error("Error fetching all Orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

const updateOrder = async(req, res) => {

    const { _id, Status, Message } = req.body;

    const filter = { _id };
    const update = { Status, Message };

    try {
        await connect(process.env.MONGO_URL)
        await Order.findOneAndUpdate(filter, update, {
            new: true
        });

        const orders = await Order.find();
        res.json({
            message: "Order Updated Successfully",
            orders
        });
    }
    catch (error) {
        console.error("Error Updating Order:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = { demoMail, addOrders, getOrderByID, getAllOrders, updateOrder }