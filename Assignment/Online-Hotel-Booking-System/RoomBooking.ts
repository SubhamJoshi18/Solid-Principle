import Person from "./Person";

class RoomBooking {
  roomNumber: number;
  person: Person;

  constructor(roomNumber: number, person: Person) {
    this.roomNumber = roomNumber;
    this.person = person;
  }

  public getRoomDetails() {
    return `Your Room Number is : ${this.roomNumber} For : ${this.person.name}`;
  }
}

export default RoomBooking;
