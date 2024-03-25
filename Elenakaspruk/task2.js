db.tracks.find(
    { duration_secs: { $lte: 60 } },
    { title: 1, duration_secs: 1, _id: 0 }
)