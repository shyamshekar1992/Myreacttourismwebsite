const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: String,
    description: String,
    reviews: [String],
    //reviews: [{ text: String, author: { type: Schema.Types.ObjectId, ref: 'User' } }],
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    price: Number,
    img: String,
    smalldescription: String,
    code: String,
    likes: String,
    room: Boolean,
    type: Number,
    region: String,
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model('Myplaces', projectSchema);
// mongoose = model('Myplaces', projectSchema);

module.exports = Project;