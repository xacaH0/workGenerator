import glob

path = './output/metadata/*'   
files = glob.glob(path)

contents = []   

for name in files:
         # no change made to your reading code
     with open(name, "r") as f:
            data = f.readlines()
            data[3] ='\t"image":"https://bafybeigyetdw73gxpstfipkccofzbl64aypwvqvwvor3op3ufaueiy5r4i.ipfs.nftstorage.link/ ",\n'
         # overwrite the original files, put the text in one line, separated by 
     with open(name,"r+") as f:
         f.writelines(data)  
