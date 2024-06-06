const chickenTraits = ["cowardly", "brave", "smart", "happy", "sad", "funny", "lazy", "emotional", "lonely"];
const bios = [];

for (let index = 0; index < chickenTraits.length; index++) {
  for (let secondindex = 0; secondIndex < chickenTraits.length; secondIndex++) {
    for (let thirdindex = 0; thirdIndex < chickenTraits.length; thirdIndex++)  {
       bios.push(`${chickenTraits[index]}, ${chickenTraits[secondIndex]}, ${chickenTraits[thirdIndex]}`);
    }
  }
}

for (const bio of bios) {
  console.log("This is the story of a", bio, "chicken");
}