
const User=require('../models/loan');


module.exports.loan = async function (req,res){
    const {name,email,age}=req.body;

    try {

        const loanApp = await User.create({name, email, age});


       return  res.status(201).json(loanApp);
    }catch (error){
        console.log('error in creating Loan Application',error);

    }


}



