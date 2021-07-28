const mongoose =  require('mongoose');
const Schema = mongoose.Schema

const cribSchema = new Schema ({
    name: {
        type: String
    },
    img : {
        type: String
    },
    location : {
        type: String
    }
})

const Crib = mongoose.model('crib', cribSchema);

module.exports = Crib;