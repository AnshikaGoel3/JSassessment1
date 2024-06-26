/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

// Array: to hold NFTs
let NFTs = [];


function mintNFT (name, eyeColor, age, height, shoeType) {
    //object to hold the properties of the NFT
    const NFT = {
     "Name" : name,
     "Eye Color" : eyeColor,
     "Age" : age,
     "Height(in cm)" : height,
     "Shoe Type" : shoeType
    }
    
    //add NFT to the Array
    NFTs.push(NFT);

    //print the successful message
    console.log("NFT with name " + name + " has been minted");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
    console.log("\nDetails of NFT " + (i + 1) + ":");
    console.log("\nName: \t\t" + NFTs[i].Name);
    console.log("Eye Color: \t" + NFTs[i]["Eye Color"]);
    console.log("Age: \t\t" + NFTs[i].Age);
    console.log("Height: \t" + NFTs[i]["Height(in cm)"]);
    console.log("Shoe Type: \t" + NFTs[i]["Shoe Type"]);
    console.log("--------------------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Number of NFTs minted are: " + NFTs.length);
}

// call your functions below this line
mintNFT("Aryan", "brown", 20, 180, "Sneakers");
mintNFT("Aradhya", "grey", 24, 165, "Sandals");
mintNFT("Arjun", "green", 26, 178, "Sports");

listNFTs();

//calling function to print the total number of NFTs
getTotalSupply();