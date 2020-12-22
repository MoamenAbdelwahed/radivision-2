function findAllMovies(){
  return [
    {
      id: 1,
      name: 'Avengers'
    },
    {
      id: 2,
      name: 'Tenet'
    }
  ]
}

exports.findAll = (req, res) => {
  res.send(findAllMovies())
};
