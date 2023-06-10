const { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: String, required: true },
        credits: { type: Schema.Types.ObjectID, ref: 'credit' },
        title: { type: String, required: true }
        img: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = actorSchema