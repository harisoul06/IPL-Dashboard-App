import './index.css';

const MatchCard = ({ match }) => (
  <div className="match-card">
    <img src={match.competing_team_logo} alt={`competing team ${match.competing_team}`} className="match-logo" />
    <p>{match.competing_team}</p>
    <p>{match.result}</p>
    <p>{match.match_status}</p>
  </div>
);

export default MatchCard;
