class BaseBird {
  makeSound() {}
}

class TrueBird extends BaseBird {
  fly() {}

  makeSound(): void {}
}

class TrueSparrow extends TrueBird {
  fly(): void {}
  makeSound(): void {}
}

class TruePenguin extends BaseBird {
  makeSound(): void {}

  fly() {
    throw new Error("Penguin Cannot Fly");
  }
}

function makeBirdFly(bird: Bird) {
  bird.fly();
}

function makePenguinFly(baseBird: TruePenguin) {
  baseBird.fly();
}


