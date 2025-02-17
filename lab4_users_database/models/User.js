// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: [4, 'Username must be at least 4 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  address: {
    street: {
      type: String,
      required: [true, 'Street address is required']
    },
    suite: {
      type: String,
      required: [true, 'Suite is required']
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      match: [/^[a-zA-Z\s]*$/, 'City name can only contain alphabets and spaces']
    },
    zipcode: {
      type: String,
      required: [true, 'Zipcode is required'],
      match: [/^\d{5}-\d{4}$/, 'Zipcode must be in format DDDDD-DDDD']
    },
    geo: {
      lat: {
        type: String,
        required: [true, 'Latitude is required']
      },
      lng: {
        type: String,
        required: [true, 'Longitude is required']
      }
    }
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^1-\d{3}-\d{3}-\d{4}$/, 'Phone must be in format 1-DDD-DDD-DDDD']
  },
  website: {
    type: String,
    required: [true, 'Website is required'],
    match: [/^https?:\/\/.+\..+/, 'Website must be a valid URL starting with http:// or https://']
  },
  company: {
    name: {
      type: String,
      required: [true, 'Company name is required']
    },
    catchPhrase: {
      type: String,
      required: [true, 'Company catch phrase is required']
    },
    bs: {
      type: String,
      required: [true, 'Company BS is required']
    }
  }
});

module.exports = mongoose.model('User', userSchema);