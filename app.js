const fs = require("fs");
const {
    add,
    del,
    list,
    update
} = require("./Utils");
let movieList = [];

try {
    let tempJson = fs.readFileSync('./netflix.json');
    let tempNetflix = JSON.parse(tempJson)
    movieList = tempNetflix;

} catch (error) {
    movieList = [];
}

const app = () => {
    if (process.argv[2] === 'add') {
        add(movieList, process.argv[3]);
    } else if (process.argv[2] === 'del') {
        del(movieList, process.argv[3]);
    } else if (process.argv[2] === 'list') {
        list(movieList);
    } else if (process.argv[2] === 'update') {
        update(movieList, process.argv[3], process.argv[4]);
    }
};

app();