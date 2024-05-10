const Login = require('../models/student');
const Session = require('../models/login');
const bcrypt = require('bcrypt');

exports.getLogin = async (req, res) => {
    console.log(req.body);
    // console.log(req.json);

    const { rollno, password } = req.body;
    try {
        const login = await Login.findOne({ rollno });
        console.log("login here");
        if (!login) {
            console.log('User not found');
            return res.status(200).json('Wrong Email or Password');
        }

        // Compare passwords using bcrypt
        const passwordMatch = password==login.password;
        if (passwordMatch) {
            console.log('Login success');
            await Session.deleteMany();
            await Session.insertMany({rollno:rollno,logined:true})
            return res.status(200).json({'message':'Success'});
        } else {
            console.log('Wrong Password');
            return res.status(200).json({'message':'Wrong Email or Password'});
        }
    } catch (error) {
        console.log('Error');
        console.log(error);
        return res.status(500).json('Internal Server Error');
    }
}
