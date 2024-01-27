const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'test',
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
      // Remove the following two lines
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}
};

module.exports = connectDB;

