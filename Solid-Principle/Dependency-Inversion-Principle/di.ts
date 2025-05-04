// Concrete Information
interface Repository {
  save(): void;
}

interface Service {
  save(): void;
}

class UserController {
  constructor(private service: Service) {}

  save() {
    this.service.save();
  }
}

class UserService implements Service {
  constructor(private repository: Repository) {}
  save() {
    this.repository.save();
  }
}

class UserRepository implements Repository {
  save() {
    console.log("Saved in the Database");
  }
}

class MongoRepisotry implements Repository {
  save(): void {}
}

const userRepository = new UserRepository();
const mongoRepository = new MongoRepisotry();
const userService = new UserService(mongoRepository);
const userController = new UserController(userService);
