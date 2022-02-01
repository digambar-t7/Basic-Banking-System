const express = require("express")
const router = express.Router()
const User = require('./models/User.js')

router.get('/fetch', async (req, res) => {
    try {
        let clients = await User.find()
        return res.status(200).json({ clients })
    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
})

router.post('./transfer', async (req, res) => {

})

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

module.exports = router