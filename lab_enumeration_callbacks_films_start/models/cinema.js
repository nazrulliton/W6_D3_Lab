const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  const result = this.films.map((film)=>{
    return film.title;

  });
  return result;
};

Cinema.prototype.findFilm = function (title) {
  const result = this.films.filter((film) => {
    return film.title === title;
  });
  return result;
};

Cinema.prototype.findGenre = function (genre) {
  const result = this.films.filter((film)=>{
    return film.genre === genre;
  });
  return result;
};


module.exports = Cinema;
