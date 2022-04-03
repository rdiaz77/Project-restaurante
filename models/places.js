const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: '../images/404Error_Dog.jpg'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
      type: Number,
      min : [1673, 'Surely not that?'],
      max : [new Date().getFullYear(), 'hey this year is in the future']
  }
})

placeSchema.methods.showEstablished = function(){
    return `${this.name} has been serving ${this.city} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)