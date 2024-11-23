import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://apis.ccbp.in/ipl');
        const data = await response.json();
        setTeams(data.teams);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teams:', error);
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  if (loading) {
    return (
      <div testid="loader" className="loader-container">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1 className="main-heading">IPL Dashboard</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipl logo"
        className="ipl-logo"
      />
      <ul className="team-list">
        {teams.map((team) => (
          <li key={team.id} className="team-card">
            <Link to={`/team-matches/${team.id}`}>
              <img
                src={team.team_image_url}
                alt={team.name}
                className="team-logo"
              />
              <p className="team-name">{team.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
