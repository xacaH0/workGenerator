const fs = require("fs");
const basePath = "./images/mouth";

fs.readdirSync(basePath).forEach((file) => {
  const fileName = file.substring(0, file.length - 4);
  // const newName = (parseInt(fileNo) + 6233) + '.png';
  // fs.rename(basePath + '/' + file, basePath + '/' + newName, (err) => {
  //   if (err) throw err;
  //   console.log('Rename complete!');
  // });

  let newName = file;
  counter = 0;
  newName = "lmao" + counter++;
  //   newName = newName.replace(/\(rare\)/g, "#0.5");
  //   newName = newName.replace(/\(super rare\) /g, "#0.01");
  //   newName = newName.replace(/\(super rare\)/g, "#0.01");
  fs.renameSync(basePath + "/" + file, basePath + "/" + newName);
  console.log("Rename complete!");

  console.log(file, newName);
});
