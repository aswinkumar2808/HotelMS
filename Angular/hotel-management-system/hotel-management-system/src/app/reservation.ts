export class Reservation {
    //userId:number=0; 
    user:any  = JSON.parse(localStorage.getItem('user')||'{}');
    id:number=0;
    checkInDate:String="";
    checkOutDate:String="";
    roomPreference:String="";
    name:String="";
    contact:String="";
    userId = this.user.userId;
}
