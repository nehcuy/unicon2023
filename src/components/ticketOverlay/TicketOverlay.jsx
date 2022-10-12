import "./TicketOverlay.scss";
//https://www.tickettailor.com/events/nusentrepreneurshipsociety/1052109/o/35d5891
const ticket_url = "https://www.tickettailor.com/events/nusentrepreneurshipsociety/602704"

export default function TicketOverlay() {
  return (
    <div className="getTicketOverlay" onClick={()=>{window.open(ticket_url)}}>
      <i className="fas fa-ticket-alt"></i>
    </div>
  );
}
