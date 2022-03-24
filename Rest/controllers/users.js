const UserModel = require("./../models/users")


exports.createUser = async (req, res) => {
    
    const email = req.body.email
    UserModel.findOne({ email: email }, async (err, user) => {
        if (user) {
            res.send("User Already Registered")
        } else {
            try {
                const newUser = new UserModel(req.body);
                res.status(201).json(await newUser.save())
            } catch (err) {
                res.status(500).json({ error: err })
                res.send("Successfull Registered")

            }
        }
    })

}

//login post
exports.loginUser = (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password
        UserModel.findOne({ email: email }, (err, user) => {
            if (user) {
                if (password === user.password) {
                    res.send({ message: "Login SuccessFull", user: user })
                } else {
                    res.send({ message: "Password didn't Match" })
                }
            } else {
                res.send({ message: "User Not Registered Please Register" })
            }
        })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

//to get alll user info
exports.getAllUserInfo = async (req, res) => {
    try {

        const users = await UserModel.find()
        res.status(200).json(users)

    } catch (err) {
        res.status(500).json({ error: err })
    }
}


//to get info of specified user
exports.getUserInfo = async (req, res) => {
    try {
        const user = await UserModel.find({ _id: req.params.userId })
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

//to update info of specified user
exports.updateUserInfo = (req, res) => {
   
    UserModel.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true },
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err })
            } else {
                res.status(200).json(data)
            }
        })
}

//delete info of specified user
exports.deleteUserInfo = (req, res) => {
    UserModel.findOneAndDelete({ _id: req.params.userId },
        (err, data) => {
            if (err) {
                res.status(500), json({ error: err })
            } else {
                res.status(200).json(data)
            }
        })
}