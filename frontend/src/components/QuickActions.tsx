import type { QuickAction } from '../data/dashboard';
import './QuickActions.css';

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
  return (
    <div className="quick-actions">
      {actions.map((action) => (
        <article key={action.id} className="quick-action">
          <div>
            <h3>{action.label}</h3>
            <p>{action.description}</p>
          </div>
          <button type="button">{action.cta}</button>
        </article>
      ))}
    </div>
  );
};

export default QuickActions;
