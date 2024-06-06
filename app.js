



// loop through first hat
// choose first trait
// loop through second trait
// with first trait fixd, choose second trait
// loop through third hate
// fix first and second, choose third, add bios to bios list

const chickenTraits = ["cowardly", "brave", "smart", "happy", "sad", "funny", "lazy", "emotional", "lonely"];
let secondIndex = index;
let thirdIndex = index;

const bios = [];
for (let index = 0; index < chickenTraits.length; index++) {
  for (let secondindex = 0; secondIndex < chickenTraits.length; secondIndex++) {
    for (let thirdindex = 0; thirdIndex < chickenTraits.length; thirdIndex++)  {
       bios.push(`${chickenTraits[index]}, ${chickenTraits[secondIndex]}, ${chickenTraits[thirdIndex]}`);
    }
  }
}

console.log(bios);

for (const bio of bios) {
  console.log("This is the story of a", bio, "chicken");
}