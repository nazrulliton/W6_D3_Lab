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

Cinema.prototype.findYear = function (year) {
  const result = this.films.filter( (film) => {
    return film.year === year;
  });

  if (result.length > 0) {
    return true;
  } else {
    return false
  }
};


Cinema.prototype.lengthOver = function (minLength) {
  const allFilms= this.films.length;
  const result = this.films.filter((film)=>{
    return film.length > minLength;
  });
  if (allFilms === result.length){
    return true;
  }
  else{
    return false;
  };
};
Cinema.prototype.allFilmLength = function () {
  return this.films.reduce((totalLength, film) => {
  return  totalLength + film.length;
  }, 0);
};

module.exports = Cinema;
