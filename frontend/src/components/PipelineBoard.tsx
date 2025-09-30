import type { PipelineStage } from '../data/dashboard';
import './PipelineBoard.css';

interface PipelineBoardProps {
  stages: PipelineStage[];
}

const PipelineBoard: React.FC<PipelineBoardProps> = ({ stages }) => {
  return (
    <div className="pipeline-board">
      {stages.map((stage) => (
        <article key={stage.id} className={`pipeline-stage ${stage.status}`}>
          <header>
            <h3>{stage.name}</h3>
            <span className="count">{stage.count}</span>
          </header>
          <p>{stage.description}</p>
        </article>
      ))}
    </div>
  );
};

export default PipelineBoard;
