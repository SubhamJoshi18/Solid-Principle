class Bird {
  fly() {
    console.log("Bird Fly");
  }

  makeSound() {
    console.log("Make Sound");
  }
}

class Sparrow extends Bird {
  makeSound(): void {
    console.log("Sparrow sound");
  }
  fly(): void {
    console.log("Sparrow Fly");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguin Does not Fly");
  }
}

function makeBirdFlys(bird: Bird) {
  console.log(bird.fly());
}

makeBirdFly(new Bird());
makeBirdFly(new Sparrow());
makeBirdFly(new Penguin());


