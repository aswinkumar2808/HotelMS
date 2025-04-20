import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Room {
  roomNumber: string;
  roomType: string;
  status: string;
  reservationId: number | null;
}

@Component({
  selector: 'app-room-status',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-status.component.html',
  styleUrls: ['./room-status.component.css']
})
export class RoomStatusComponent implements OnInit {
  rooms: Room[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() {
    this.http.get<Room[]>('http://localhost:8081/api/rooms')
      .subscribe(data => {
        this.rooms = data;
        localStorage.setItem('rooms', JSON.stringify(data));
      }, error => {
        console.error('Error fetching rooms:', error);
      });
  }

  toggleRoomStatus(room: Room) {
    const isAvailable = room.status === 'available';
    const updatedRoom: Room = {
      ...room,
      status: isAvailable ? 'booked' : 'available',
      reservationId: isAvailable ? this.generateRandomReservationId() : null
    };

    this.http.put<Room>(`http://localhost:8081/api/rooms/${room.roomNumber}`, updatedRoom).subscribe(
      updated => {
        room.status = updated.status;
        room.reservationId = updated.reservationId;
      },
      error => {
        console.error('Failed to update room:', error);
      }
    );
  }

  generateRandomReservationId(): number {
    return Math.floor(Math.random() * 9000) + 1000; 
  }
}
