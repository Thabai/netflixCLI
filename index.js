const fs = require('fs');
let movieList;

try {
    let tempJson = fs.readFileSync('./netflix.json');
    let tempNetflix = JSON.parse(tempJson)
    movieList = tempNetflix;

} catch (error) {
    movieList = []
}

const add = () => {
    if (process.argv[2] === 'add') {
        let tempMovie = {
            name: process.argv[3]
        };
        movieList.push(tempMovie);
        let stringMovieList = JSON.stringify(movieList.flat(1));
        console.log(movieList)
        fs.writeFileSync('./netflix.json', stringMovieList);
    };
};

add();

const del = () => {
    if (process.argv[2] === 'del') {
        let deleteIndex;
        movieList.map((movie, index) => {
            if (movie.name === process.argv[3]) {
                deleteIndex = index;
            }
        });
        if (deleteIndex !== undefined) {
            movieList.splice(deleteIndex, 1);
            let stringMovieList = JSON.stringify(movieList);
            fs.writeFileSync('./netflix.json', stringMovieList);
        }
    };
};

del();

const list = () => {
    if (process.argv[2] === 'list')
    console.log(movieList);
};

list()

const update = () => {
    if (process.argv[2] === 'update') {
        let updateIndex;
        movieList.map((movie, index) => {
            if (movie.name === process.argv[3]) {
                updateIndex = index;
            }
        });
        if (updateIndex !== undefined) {
            movieList[updateIndex] = {movie: process.argv[4]};
            let stringMovieList = JSON.stringify(movieList);
            fs.writeFileSync('./netflix.json', stringMovieList);
        }
    };
};

update();
