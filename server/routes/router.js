const express = require('express');
const router =  express.Router();
const users = require("../models/userSchema");

router.post("/register", async (req,res) => {
    console.log(req.body);
    const {name,email,age,mobile,work,add,desc} = req.body;

    if (!name || !email || !age || !mobile || !work || !add || !desc) {
        res.status(400).send("plz fill the data");
    }

    try {

        const preuser = await users.findOne({email:email});
        console.log(preuser);
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;