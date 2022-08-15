const fs = require("fs");
const metadataFolder = "./metadata/";

fs.readdirSync(metadataFolder).forEach((file) => {
  //console.log("File: ", file)
  let data = JSON.parse(fs.readFileSync(metadataFolder + "/" + file));

  for (var i = 0; i < metadataFolder.length; i++) {
    data.image =
      "https://nftstorage.link/ipfs/bafybeiggux2wheebixiboo4uikf6ape36sblehmdhr5ly4bqddz4q4k2da/" +
      i +
      ".png";
    let dataJSON = JSON.stringify(data);
    fs.writeFileSync("./newMetadata/" + i, dataJSON, "utf8");
  }
});
console.log("URL is finished renaming");
