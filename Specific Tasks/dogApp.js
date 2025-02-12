// Constructor function for creating dog objects
function Dog(name, show, breed, canTalk) {
  this.name = name;
  this.show = show;
  this.breed = breed;
  this.canTalk = canTalk;

  // Method to greet and determine if the dog can talk
  this.myGreeting = function() {
    let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
    return `Hello, my name is ${this.name}. ${talkMessage} I starred in the TV show "${this.show}". My character is a ${this.breed}.`;
  };
}

// Creating two new dog objects
const dog1 = new Dog("Scooby-Doo", "Scooby-Doo, Where Are You!", "Great Dane", true);
const dog2 = new Dog("Brian", "Family Guy", "Labrador", true);
const dog3 = new Dog("Odie", "Garfield and Friends", "Dachshund", false);

// Storing the dog objects in an array for easier access
const dogs = [dog1, dog2, dog3];


dogs.forEach((dog, index) => {
  console.log(`Dog ${index + 1}:`);
  for (let property in dog) {
    if (typeof dog[property] !== 'function') {
      console.log(`${property}: ${dog[property]}`);
    }
  }
  console.log("---");
});

// Prompting the user to select a dog and displaying its greeting message
let selectedDogName = prompt("Enter the name of the dog you want to learn about (Scooby-Doo, Brian, or Odie):");

let selectedDog = dogs.find(dog => dog.name.toLowerCase() === selectedDogName.toLowerCase());

if (selectedDog) {
  console.log(selectedDog.myGreeting());
} else {
  console.log("The dog you selected doesn't exist.");
}
