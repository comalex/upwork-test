import {
  activities,
  candidates,
  filters,
  metrics,
  pipeline,
  quickActions
} from './data/dashboard';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import FilterBar from './components/FilterBar';
import CandidateCard from './components/CandidateCard';
import PipelineBoard from './components/PipelineBoard';
import ActivityFeed from './components/ActivityFeed';
import QuickActions from './components/QuickActions';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="layout">
        <section className="primary">
          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Open Role</p>
                <h1>Lead Product Designer — Discovery Experiences</h1>
                <p className="subheadline">
                  A collaborative workspace to align hiring, design leadership, and recruiting on
                  the candidate journey for the Discovery product area.
                </p>
              </div>
              <button className="cta">Create alignment brief</button>
            </div>
            <FilterBar filters={filters} />
            <div className="metrics-grid">
              {metrics.map((metric) => (
                <MetricCard key={metric.id} metric={metric} />
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Recommended candidates</h2>
              <button className="link-button">View talent pool</button>
            </div>
            <div className="candidate-grid">
              {candidates.map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Hiring pipeline</h2>
              <button className="link-button">Export report</button>
            </div>
            <PipelineBoard stages={pipeline} />
          </div>
        </section>

        <aside className="secondary">
          <div className="panel sticky">
            <div className="panel-header">
              <h2>Latest activity</h2>
              <span className="badge">Live</span>
            </div>
            <ActivityFeed items={activities} />
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Quick actions</h2>
            </div>
            <QuickActions actions={quickActions} />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default App;
