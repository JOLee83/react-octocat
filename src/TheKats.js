import React, { Component } from 'react'
import Kats from "./Kats"

class TheKats extends Component {
    state = {}
    render() {
        
        const katfo = [{
            katImage: "https://octodex.github.com/images/spidertocat.png",
            katNumber: "16",
            katName: "Spidertocat",
            userImage: "https://avatars3.githubusercontent.com/u/19292210?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/boxertocat_octodex.jpg",
            katNumber: "15",
            katName: "Boxertocat",
            userImage: "https://avatars3.githubusercontent.com/u/19292210?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/blacktocats.png",
            katNumber: "14",
            katName: "Blacktocats",
            userImage: "https://avatars3.githubusercontent.com/u/19292210?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/catstello.png",
            katNumber: "13",
            katName: "Catstello",
            userImage: "https://avatars3.githubusercontent.com/u/19292210?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/dinotocat.png",
            katNumber: "12",
            katName: "Dinotocat",
            userImage: "https://avatars1.githubusercontent.com/u/2053865?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/inflatocat.png",
            katNumber: "11",
            katName: "Inflatocat",
            userImage: "https://avatars1.githubusercontent.com/u/2053865?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/jetpacktocat.png",
            katNumber: "10",
            katName: "Jetpacktocat",
            userImage: "https://avatars1.githubusercontent.com/u/2053865?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/justicetocat.jpg",
            katNumber: "9",
            katName: "Justicetocat",
            userImage: "https://avatars1.githubusercontent.com/u/2053865?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/mcefeeline.jpg",
            katNumber: "8",
            katName: "Mcefeeline",
            userImage: "https://avatars0.githubusercontent.com/u/18125109?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/privateinvestocat.jpg",
            katNumber: "7",
            katName: "Privateinvestocat",
            userImage: "https://avatars0.githubusercontent.com/u/18125109?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/homercat.png",
            katNumber: "6",
            katName: "Homercat",
            userImage: "https://avatars0.githubusercontent.com/u/18125109?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/scubatocat.png",
            katNumber: "5",
            katName: "Scubatocat",
            userImage: "https://avatars0.githubusercontent.com/u/18125109?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/skatetocat.png",
            katNumber: "4",
            katName: "Skatetocat",
            userImage: "https://avatars2.githubusercontent.com/u/1300064?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/surftocat.png",
            katNumber: "3",
            katName: "Surftocat",
            userImage: "https://avatars2.githubusercontent.com/u/1300064?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/tentocats.jpg",
            katNumber: "2",
            katName: "Tentocats",
            userImage: "https://avatars2.githubusercontent.com/u/1300064?s=400&v=4"
        },
        {
            katImage: "https://octodex.github.com/images/xtocat.jpg",
            katNumber: "1",
            katName: "X-tocat",
            userImage: "https://avatars2.githubusercontent.com/u/1300064?s=400&v=4"
        }
    ]

    const showKats = katfo.map((cat) =>
        <Kats katImage={cat.katImage} katNumber={cat.katNumber} katName={cat.katName} userImage={cat.userImage} />
    )

    return (
        <main>
            {showKats}
        </main>
    )
    }
}

    export default TheKats