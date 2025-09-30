import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">OD</div>
        <div>
          <span className="brand-name">Opportunity Desk</span>
          <span className="brand-subtitle">Talent collaboration hub</span>
        </div>
      </div>
      <nav className="nav">
        <button className="nav-button active">Workspace</button>
        <button className="nav-button">Talent search</button>
        <button className="nav-button">Analytics</button>
      </nav>
      <div className="header-actions">
        <button className="pill">Share</button>
        <button className="avatar" aria-label="Open profile menu">
          <span>KT</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
