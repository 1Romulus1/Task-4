const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
{
   user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
   },
   text: String,
},
{
   timestamps: true,
})

module.exports = mongoose.model("Message", messageSchema);