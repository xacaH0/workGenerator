const fs = require('fs');
const isLocal = typeof process.pkg === "undefined";

const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

let rawdata = fs.readdirSync(`${basePath}/metadata/`);

rawdata.forEach((item) => {
    const data = JSON.stringify(item);
    data.image = `ipfs://testing.png`;
    fs.writeFileSync(

    );
  });
// fs.readdir('./metadata/', (err, files) => {
//     if (err) throw err;
//     if (files){
//         files.forEach(file => {
//             fs.writeFileSync(file.image, JSON.stringify("stackoverflow"))
//         });
//     } else {
//         console.log('no files found')
//     }
//});