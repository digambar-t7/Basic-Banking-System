const express = require("express")
const router = express.Router()
const User = require('./models/User.js')
const Transfer = require('./models/Transfer.js')

router.post('/createuser', async (req, res) => {
    try {
        const { name, email, acc, ifsc, pin, bal } = req.body
        let success = false
        const user = await User.create({
            name: name,
            email: email,
            acc: acc,
            ifsc: ifsc,
            pin: pin,
            bal: bal
        })
        let createdUser = await User.findOne({ email: email })
        if (createdUser) {
            return res.status(200).json({ success: true, user })
        }
        return res.status(400).json({ success })
    } catch (error) {
        return res.status(500).json({ error })
    }
})

router.get('/fetch', async (req, res) => {
    try {
        let clients = await User.find()
        return res.status(200).json({ clients })
    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
})

router.post('/transfer', async (req, res) => {
    try {
        const { sender, reciever, amount, funds } = req.body
        let reciept = await Transfer.create({
            sender: sender,
            reciever: reciever,
            amount: amount,
            funds: funds
        })
        return res.status(200).json({ success: true, reciept })
    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
})

router.get('/transactions/:client', async (req, res) => {
    try {
        let client = req.params.client
        let transactions
        if (client === "all") {
            transactions = await Transfer.find()
        }
        transactions = await Transfer.find({ sender: client })
        if (transactions.length === 0) {
            return res.status(500).json({ success: false, msg: "No transaction history found" })
        }
        return res.status(200).json({ success: true, transactions })
    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
})


module.exports = router