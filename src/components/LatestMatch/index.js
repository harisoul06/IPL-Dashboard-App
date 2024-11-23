import './index.css';

const LatestMatch = ({ latestMatch }) => (
  <div className="latest-match">
    <p>{latestMatch.umpires}</p>
    <p>{latestMatch.result}</p>
    <p>{latestMatch.date}</p>
    <p>{latestMatch.venue}</p>
    <img src={latestMatch.competing_team_logo} alt={`latest match ${latestMatch.competing_team}`} className="competing-team-logo" />
    <p>{latestMatch.first_innings}</p>
    <p>{latestMatch.second_innings}</p>
    <p>{latestMatch.man_of_the_match}</p>
  </div>
);

export default LatestMatch;
