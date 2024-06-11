const pronouns = ["the", "our"];
const adjectives = ["great", "big"];
const nouns = ["jogger", "racoon"];

const domains = [];
for (let pronoun in pronouns) {
  for (let adjective in adjectives) {
    for (let noun in nouns) {
      domains.push(`${pronouns[pronoun]}${adjectives[adjective]}${nouns[noun]}`);
    }
  }
}

for (const domain of domains) {
  console.log(domain + ".com");
}