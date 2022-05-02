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

        if (preuser) {
            res.status(404).send("Esse usuario esta pronto")
        } else {
            const adduser = new users ({
                name,email,age,mobile,work,add,desc
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;