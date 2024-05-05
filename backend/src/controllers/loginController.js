const Login = require('../models/student');

exports.getLogin = async (req,res)=>{
    console.log(req.body);
    // console.log(req.json);

    const {rollno,password} = req.body;
    try {
        console.log("reached herr");
        const login = await Login.findOne({rollno});
        console.log(login);
        console.log("login herr");
        if(login.password === password){
            console.log('login success');
        }
        return res.status(200).redirect('/dashboard');
    } catch (error) {
        res.status(200);
        console.log(error);
    }
}