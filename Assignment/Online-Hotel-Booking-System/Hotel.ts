import Person from "./Person";
import RoomBooking from "./RoomBooking";

class Hotel {
  private availableRoom: Array<number> = [1, 2, 3, 4, 5];
  person: Person;

  constructor(person: Person) {
    this.person = person;
  }

  bookRoom(roomId: number) {
    const isValidRoom = this.availableRoom.findIndex(
      (item) => item.toString() == roomId.toString()
    );
    if (isValidRoom === -1) {
      console.log(`The Room is Filled`);
    }

    const roomBookingInstance = new RoomBooking(roomId, this.person);
    roomBookingInstance.getRoomDetails();
  }
}

export default Hotel;
