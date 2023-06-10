const db = require('../db')
const { Actor, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const fundamentalsOfCaring = await Movie.find({ title: "The Fundamentals of Caring" })
    const actors = [
        {
            name: "Paul Rudd",
            age: "54",
            credits: fundamentalsOfCaring[0].title,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/xDg-it3VJIKrSQRQQBi-VuwOw-w=/100x120/v2/https://flxt.tmsimg.com/assets/50640_v9_bb.jpg")
        },
        {
            name: "Selena Gomez",
            age: "30",
            credits: fundamentalsOfCaring[0].title,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/vIn7nGTc7foBleU5aNxUH-EHpqE=/100x120/v2/https://flxt.tmsimg.com/assets/506666_v9_bc.jpg")
        },
        {
            name: "Jennifer Ehle",
            age: "53",
            credits: fundamentalsOfCaring[0].title,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/-UFQyEYRtBa0agTJysdiwivPKlg=/100x120/v2/https://flxt.tmsimg.com/assets/76517_v9_bb.jpg")
        },
        {
            name: "Craig Roberts",
            age: "32",
            credits: fundamentalsOfCaring[0].title,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/LNGqQ2wfuFyQa69qsSa304EoF4o=/100x120/v2/https://flxt.tmsimg.com/assets/519720_v9_bb.jpg")
        },
        {
            name: "Megan Ferguson",
            age: "40",
            credits: fundamentalsOfCaring[0].title,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/TK3OX4UqeK76zU9w9-bsGqFkKzs=/100x120/v2/https://flxt.tmsimg.com/assets/751474_v9_ba.jpg")
        },
        {
            name: "Julia Denton",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BMDUzNTc5ZmQtOWVjMy00YzFmLWI2YmYtNWU3OWRkZTkxM2IxXkEyXkFqcGdeQXVyMTkwMTE4NjM@._V1_.jpg")
        },
        {
            name: "Alex Huff",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BNmFlNzBmMDMtNGRiZS00ZTk4LWFiMzAtZjAwMDlmZTFhMGNmXkEyXkFqcGdeQXVyNDkyNTUwNTY@._V1_.jpg")
        },
        {
            name: "Samantha Huskey",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BNmE3MmE4MGYtZjc0OS00NDZlLTkxMDgtYjg0YzhhMDAyY2IyXkEyXkFqcGdeQXVyMjIxMDc5MDY@._V1_.jpg")
        },
        {
            name: "Bill Murphey",
            age: "62",
            credits: fundamentalsOfCaring[0].title,
            title: "Actor",
            img: new URL("https://encoreatlanta.com/wp-content/uploads/2010/08/Bill_Murphey.jpg")

        },
        {
            name: "Donna Biscoe",
            age: "67",
            credits: fundamentalsOfCaring[0].title,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/1vF0YQy6_C9Gz0duV5RBc7JvDVA=/100x120/v2/https://flxt.tmsimg.com/assets/125340_v9_ab.jpg")
        },
        {
            name: "Rob Burnett",
            age: "60",
            credits: fundamentalsOfCaring[0].title,
            title: "Director, Screenwriter, Producer",
            img: new URL("https://resizing.flixster.com/1ermthdQH1Cz1eZUSYkXxVUjI5I=/100x120/v2/https://flxt.tmsimg.com/assets/346580_v9_ba.jpg")
        },
        {
            name: "Donna Gigliotti",
            age: "67",
            credits: fundamentalsOfCaring[0].title,
            title: "Producer",
            img: new URL("https://resizing.flixster.com/-8gix1U0hrsNW3VQMrT51G982jw=/100x120/v2/https://flxt.tmsimg.com/assets/310727_v9_ba.jpg")
        },
        {
            name: "James Spies",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Producer",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Jamal Daniel",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Executive Producer",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Renee Witt",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Executive Producer",
            img: new URL("https://images.mubicdn.net/images/cast_member/158074/cache-559025-1592889540/image-w856.jpg?size=800x")
        },
        {
            name: "Giles Nuttgens",
            age: "61",
            credits: fundamentalsOfCaring[0].title,
            title: "Cinematographer",
            img: new URL("https://www.themoviedb.org/t/p/w235_and_h235_face/jz40SpwgZtAshuVWq2ThsGpxObs.jpg")
        },
        {
           name: "Christopher Passig",
           age: "Unknown",
           credits: fundamentalsOfCaring[0].title,
           title: "Film Editing",
           img: new URL("https://m.media-amazon.com/images/M/MV5BY2VhMTU3YzMtODJmMy00MDlhLWE2ODctYjZiNjM5NmRmNDVkXkEyXkFqcGdeQXVyNzQyMjgzNA@@._V1_.jpg")
        },
        {
            name: "Ryan Miller",
            age: "50",
            credits: fundamentalsOfCaring[0].title,
            title: "Original Music",
            img: new URL("https://upload.wikimedia.org/wikipedia/commons/5/5e/Ryan_miller_2010.jpg")
        },
        {
            name: "Meghan C. Rogers",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Production Design",
            img: new URL("https://images.squarespace-cdn.com/content/v1/5eab1bafda7c275fd55b8f92/1588281136269-WX9S0WPSB9QE43IFQ6GO/MR_still2.jpg?format=500w")
        },
        {
            name: "Gershon Ginsburg",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Art Director",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Maria Nay",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Set Decoration",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Peggy Stamper",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Costume Design",
            img: new URL("https://img1.wsimg.com/isteam/ip/34d9366c-17b3-4fdc-9393-6504b2ca2700/7d03f2f0-3ca4-4796-a90f-233d31dd95e5.jpg/:/rs=w:400,cg:true,m")
        },
        {
            name: "Andrea Craven",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Casting",
            img: new URL("https://media.licdn.com/dms/image/C4E03AQEzVp8UE8ykiw/profile-displayphoto-shrink_800_800/0/1622470511509?e=2147483647&v=beta&t=Gnb28favWCiG1LQd-LLXNl3xQMVs0USrLUPxbxzeSUI")
        },
        {
            name: "Tara Feldstein",
            age: "Unknown",
            credits: fundamentalsOfCaring[0].title,
            title: "Casting",
            img: new URL("https://resizing.flixster.com/UG0p27gR3xk_95NZ4fu9sOfImiY=/100x120/v2/https://flxt.tmsimg.com/assets/985822_v9_ba.jpg")
        }
    ]

    await Actor.insertMany(actors)
    console.log('Created actors with movies!')
}

const run = async () => {
    await main()
    db.close()
}

run()