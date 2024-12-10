function EventCard({ title, date, description }) {
  return (
    <div className="event-card">
      <a 
        href="https://wikimediaworkshop.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="register-button"
      >
        Register Now
      </a>
    </div>
  );
}

export default EventCard; 