import type { FilterOption } from '../data/dashboard';
import './FilterBar.css';

interface FilterBarProps {
  filters: FilterOption[];
}

const FilterBar: React.FC<FilterBarProps> = ({ filters }) => {
  return (
    <div className="filter-bar">
      <div className="filter-scroll">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-chip ${filter.active ? 'active' : ''}`}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>
      <button className="filter-link" type="button">
        Manage filters
      </button>
    </div>
  );
};

export default FilterBar;
