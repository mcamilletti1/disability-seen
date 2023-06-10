const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        mediaType: {type: String, required: true },
        releaseDate: { type: String, required: true },
        genre: { type: String, required: true },
        duration: { type: String, required: true },
        actors: { type: String, required: true },
        disabilities: { type: String, required: true },
        themes: { type: String, required: true },
        img: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = movieSchema