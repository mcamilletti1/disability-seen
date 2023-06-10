const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        {
            title: "The Fundamentals of Caring",
            mediaType: "movie",
            releaseDate: "June 24, 2016",
            genre: "Comedy, Drama",
            duration: "1 Hour, 37 Minutes",
            actors: ["Paul Rudd", "Selena Gomez", "Jennifer Ehle", "Craig Roberts", "Megan Ferguson", "Julia Denton", "Alex Huff", "Samantha Huskey", "Bill Murphey", "Donna Biscoe", "Rob Burnett", "Rob Burnett", "Rob Burnett", "Donna Gigliotti", "James Spies", "Jamal Daniel", "Renee Witt", "Giles Nuttgens", "Christopher Passig", "Ryan Miller", "Meghan C. Rogers", "Gershon Ginsburg", "Maria Nay", "Peggy Stamper", "Andrea Craven", "Tara Feldstein"],
            characters: ["Ben Benjamin", "Dot", "Elsa", "Trevor", "Peaches", "Janet", "Jodie", "Kaitlin", "Mike", "Caregiving Instructor", "Director", "Screenwriter", "Producer", "Producer", "Producer", "Executive Producer", "Executive Producer", "Cinematographer", "Film Editing", "Original Music", "Production Design", "Art Director", "Set Decoration", "Costume Design", "Casting", "Casting"],
            disabilites: "Duchenne Muscular Dystophy, Muscular Dystrophy",
            themes: "Personal care assistance, Caregiving, Dating, Parent Relationships, Travel, Mortality",
            genre: "Comedy, Drama",
            img: new URL("https://upload.wikimedia.org/wikipedia/en/3/3b/The_Fundamentals_of_Caring_poster.jpg")
        }
    ]

    await Movie.insertMany(movies)
    console.log('Created movies!')
}

const run = async () => {
    await main()
    db.close()
}

run()