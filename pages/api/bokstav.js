// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    if (req.query['egg'] === 'EGG{Påske er kult!}') {
        res.status(200).json({ bokstav: 'P' })
    }
    else if (req.query['egg'] === 'EGG{H3M3L1G}') {
        res.status(200).json({ bokstav: 'A' })
    }
    else if (req.query['egg'] === 'EGG{Htm1ErKulT}') {
        res.status(200).json({ bokstav: 'P' })
    }
    else if (req.query['egg'] === 'EGG{SsH_er_best}') {
        res.status(200).json({ bokstav: 'P' })
    }
    else if (req.query['egg'] === 'EGG{Egg_i_klartekst}') {
        res.status(200).json({ bokstav: 'A' })
    }
    else if (req.query['egg'] === 'EGG{streng}') {
        res.status(200).json({ bokstav: '!' })
    }
    res.status(200).json({ bokstav: 'Ikke riktig egg' })
}
