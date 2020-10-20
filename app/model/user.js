'use strict'
module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const UserSchema = new Schema({
    __v: { type: Number, select: false },
    email: { type: String, require: true },
    nickname: { type: String, require: true },
    passwd: { type: String, require: true, select: false },
    avatar: { type: String, require: false, default: '/user.png' },
  }, {
    timestamps: true,
  })
  const M = mongoose.model('User', UserSchema)
  M.find({}, function(err, doc) {
    if (err) {
      console.log(err.message)
    } else {
      console.log('model findOne doc', doc)
    }
  })

  return mongoose.model('User', UserSchema)
}
