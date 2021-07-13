const fs = require('fs');

exports.add = (movieList, entry) => {
        tempMovie = {name: entry};

        movieList.push(tempMovie);
        let stringMovieList = JSON.stringify(movieList.flat(1));
        fs.writeFileSync('./netflix.json', stringMovieList);
        console.log(movieList)
};

exports.del = (movieList, entry) => {
        let deleteIndex;
        movieList.map((movie, index) => {
            if (movie.name === entry) {
                deleteIndex = index;
            }
        });
        if (deleteIndex !== undefined) {
            movieList.splice(deleteIndex, 1);
            let stringMovieList = JSON.stringify(movieList.flat(1));
            fs.writeFileSync('./netflix.json', stringMovieList);
            console.log(movieList)
        }
};


exports.list = (movieList) => {
    console.log(movieList);
};

exports.update = (movieList, entry, updateEntry) => {
        let updateIndex;
        console.log(movieList)
        movieList.map((movie, index) => {
            if (movie.name === entry) {
                updateIndex = index;
            }
        });
        if (updateIndex !== undefined) {
            movieList[updateIndex] = {name: updateEntry};
            let stringMovieList = JSON.stringify(movieList);
            fs.writeFileSync('./netflix.json', stringMovieList);
            console.log(movieList)
        }
};

