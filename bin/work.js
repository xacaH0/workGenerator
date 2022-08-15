const mergeImages = require('merge-images');
const {Image, Canvas} = require('canvas');
const ImageDataURI = require('image-data-uri');
const cluster = require('cluster');
const os = require('os');
const fs = require('fs');

const numCPUs = os.cpus().length;

try{
    partsString = fs.readFileSync('./data.json', 'utf8');
} catch (err) {
    console.log(err)
}

const wholeArray = partsString.split("],[")


const removeFirst = wholeArray[0].replace('[[', '');
wholeArray [0] = removeFirst;

const removeLast = wholeArray[0].replace(']]', '');
wholeArray [wholeArray.length - 1] = removeLast;

//console.log(wholeArray[1])
outputPath = process.cwd() + '/output/';

var partsToMerge = []

for (var i = 0; i < wholeArray.length; i++) {
    var smallArray = wholeArray[i].split(",")
    partsToMerge.push(smallArray)
}

for (var i = 0; i < partsToMerge.length; i++) {
    for (var j = 0; j < partsToMerge[0].length; j++) {
        const removeSign = partsToMerge[i][j].replaceAll('"', '');
        partsToMerge [i][j] = removeSign;
    }
}

// console.log(partsToMerge)

async function pokusaj() {
    if (cluster.isPrimary) {
        // Fork workers.
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
    } else {
        // console.log(cluster.worker.id)
        for (var i = (cluster.worker.id - 1); i < partsToMerge.length; i += numCPUs) {
            const b64 = await mergeImages(partsToMerge[i], {Canvas: Canvas, Image: Image}); // SASTAVIO SLIKU
            await ImageDataURI.outputFile(b64, outputPath + `${i}.png`);
        }
    }
}

pokusaj();