import type { Metric } from '../data/dashboard';
import './MetricCard.css';

interface MetricCardProps {
  metric: Metric;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <article className="metric-card">
      <div className="metric-label">{metric.label}</div>
      <div className="metric-value">{metric.value}</div>
      <div
        className={`metric-change ${
          metric.trend === 'up' ? 'positive' : metric.trend === 'down' ? 'negative' : 'neutral'
        }`}
      >
        {metric.change}
      </div>
    </article>
  );
};

export default MetricCard;
