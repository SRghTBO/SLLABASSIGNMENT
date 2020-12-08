const mongoose = require('mongoose');

uri='mongodb+srv://SetuP:T9q8hvzwZ00lIZTX@cluster0.w7yge.mongodb.net/Feedback?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err)
        console.log('MongoDB connection successful');
    else
        console.log(err);
    
});

module.exports = mongoose;