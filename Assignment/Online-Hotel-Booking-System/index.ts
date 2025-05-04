import Hotel from "./Hotel";
import Person from "./Person";

const person1 = new Person("1", "Shubham", 19);

const hotel = new Hotel(person1);

hotel.bookRoom(1);
