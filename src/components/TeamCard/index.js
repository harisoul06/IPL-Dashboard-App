import './index.css';

const TeamCard = ({ team }) => (
  <div className="team-card">
    <img src={team.team_image_url} alt={team.name} className="team-logo" />
    <p className="team-name">{team.name}</p>
  </div>
);

export default TeamCard;
