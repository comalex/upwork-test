import type { Candidate } from '../data/dashboard';
import './CandidateCard.css';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <article className="candidate-card">
      <header>
        <div className="candidate-avatar" aria-hidden="true">
          {candidate.name
            .split(' ')
            .map((part) => part[0])
            .slice(0, 2)
            .join('')}
        </div>
        <div>
          <h3>{candidate.name}</h3>
          <p className="candidate-title">{candidate.title}</p>
        </div>
        <span className="match-score">{candidate.matchScore}% match</span>
      </header>
      <p className="candidate-location">{candidate.location}</p>
      <p className="candidate-availability">{candidate.availability}</p>
      <div className="skills">
        {candidate.skills.map((skill) => (
          <span key={skill} className="skill">
            {skill}
          </span>
        ))}
      </div>
      <footer>
        <span className="rate">{candidate.hourlyRate}</span>
        <button type="button" className="secondary-button">
          View profile
        </button>
      </footer>
    </article>
  );
};

export default CandidateCard;
