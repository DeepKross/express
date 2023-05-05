const checkBodyValidation = (req, res, next) => {
    if(req.body.title && req.body.author){
        next();
    }else{
        res.status(400).json('Missing required fields');
    }
}

export default checkBodyValidation;