const db = require('../db')
const { Review, Movie } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const fundamentalsOfCaring = await Movie.find({ title: "The Fundamentals of Caring" })
    const reviews = [
        {
         movie: fundamentalsOfCaring[0].title,
         title: "Surprisingly Pleasant and Overly Warming",
         reviewerName: "Christopher Stone",
         reviewText: "I never review movies, but this is an exception. I haven't been so pleasantly surprised by a movie in such a long time and I really have to commend the cast for doing such a great job. The movie was heartfelt from start to finish. Would definitely recommend to other disabled folks!",
         date: "27 June 2016",
         castingScore: 5,
         characterScore: 1.5,
         originalityScore: 4,
         accuracyScore: 2.5
        },
        {
            movie: fundamentalsOfCaring[0].title,
            title: "Easy to Care About",
            reviewerName: "Lisa Lockson",
            reviewText: "Novels about teenagers disabled or dying have become hugely popular lately. Looking at books like 'The Fault in Our Stars,' 'The Beginning of Everything', and 'Wonder', it's clear that the way to engage with a modern audience is to tell a sad story about disability.",
            date: "29 June 2016",
            castingScore: 4.5,
            characterScore: 2,
            originalityScore: 3.5,
            accuracyScore: 2
        }
    ]

    await Review.insertMany(reviews)
    console.log('Created reviews with movies!')
}

const run = async () => {
    await main()
    db.close()
}

run()