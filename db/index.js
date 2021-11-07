const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/groceries', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected')
});

const countriesSchema = new mongoose.Schema({
  country: string,
  capital: string
})

const Country = mongoose.model('Country', countrySchema);

module.exports = db;
module.exports.country = Country;