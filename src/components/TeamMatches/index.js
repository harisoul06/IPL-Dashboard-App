import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useParams, useHistory } from 'react-router-dom';
import './index.css';

const TeamMatches = () => {
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
        const data = await response.json();
        setTeamData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setLoading(false);
      }
    };
    fetchTeamData();
  }, [id]);

  if (loading) {
    return (
      <div testid="loader" className="loader-container">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    );
  }

  if (!teamData) {
    return null;
  }

  const {
    team_banner_url,
    latest_match_details,
    recent_matches,
  } = teamData;
  const {
    umpires,
    result,
    man_of_the_match,
    date,
    venue,
    competing_team,
    competing_team_logo,
    first_innings,
    second_innings,
  } = latest_match_details;

  return (
    <div className="team-matches-container">
      <img
        src={team_banner_url}
        alt="team banner"
        className="team-banner"
      />
      <p className="umpires">{umpires}</p>
      <p className="competing-team">{competing_team}</p>
      <p className="date">{date}</p>
      <p className="venue">{venue}</p>
      <p className="result">{result}</p>
      <img
        src={competing_team_logo}
        alt={`latest match ${competing_team}`}
        className="competing-team-logo"
      />
      <p className="first-innings">{first_innings}</p>
      <p className="second-innings">{second_innings}</p>
      <p className="man-of-the-match">{man_of_the_match}</p>
      <ul className="recent-matches-list">
        {recent_matches.map((match) => (
          <li key={match.id} className="match-card">
            <img
              src={match.competing_team_logo}
              alt={`competing team ${match.competing_team}`}
              className="recent-match-logo"
            />
            <p className="match-team">{match.competing_team}</p>
            <p className="match-result">{match.result}</p>
            <p className="match-status">{match.match_status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMatches;
