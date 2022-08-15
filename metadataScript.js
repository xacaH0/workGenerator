const fs = require("fs");

const dir = "./metadata/";

//for (var i = 0; i < numFiles.length; i++){
fs.readdir(dir, (err, files) => {
  files.forEach((file) => {
    var i = 0;
    const parsed = JSON.stringify(file);
    console.log(parsed)
parsed.image = "kskaaa;s;";

     fs.writeFileSync(file.image, "https://bafybeigyetdw73gxpstfipkccofzbl64aypwvqvwvor3op3ufaueiy5r4i.ipfs.nftstorage.link/", JSON.stringify(file)  )
       

    // parsed.image = "https://bafybeigyetdw73gxpstfipkccofzbl64aypwvqvwvor3op3ufaueiy5r4i.ipfs.nftstorage.link/" + i++ + ".png"
  
});})
// })

//  dir.image = "https://bafybeigyetdw73gxpstfipkccofzbl64aypwvqvwvor3op3ufaueiy5r4i.ipfs.nftstorage.link/" + i + ".png";

//   fs.writeFileSync('./metadata/' + i, JSON.stringify(dir));
