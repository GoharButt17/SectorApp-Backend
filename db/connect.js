const mongoose = require('mongoose');
uri = "mongodb+srv://GoharButt:jMlWDpWwcAJzCery@cluster0.no64y1z.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectDB = () => {
    return mongoose.connect(uri,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    });
};

module.exports = connectDB;