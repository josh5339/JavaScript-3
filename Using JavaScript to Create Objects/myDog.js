const myDog = {
  name: "Scooby-Doo",
  show: "Scooby-Doo, Where Are You!",
  breed: "Great-Dane",
  mySound: "When you hear me bark, you might be scared, but i'm just hungry!",

  displayInfo: function() {
    console.log('Hello, my name is ${this.name}. When i bark, ${this.mySound}');
    console.log('I starred in the TV show "${this.show}". My character is a ${this.breed}.');
  }
};

myDog.displayInfo();
