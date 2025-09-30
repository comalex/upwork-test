import type { ActivityItem } from '../data/dashboard';
import './ActivityFeed.css';

interface ActivityFeedProps {
  items: ActivityItem[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ items }) => {
  return (
    <ul className="activity-feed">
      {items.map((item) => (
        <li key={item.id} className={`activity-item ${item.type}`}>
          <div className="timeline-dot" aria-hidden="true" />
          <div className="activity-content">
            <header>
              <span className="actor">{item.actor}</span>
              <span className="time">{item.timeAgo}</span>
            </header>
            <p className="summary">{item.summary}</p>
            <p className="details">{item.details}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ActivityFeed;
