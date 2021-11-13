import "./Header.css";

const Header = () => {
    return(
        <div className="header-container">
            <input 
                className="search-note-field"
                placeholder="Search..."
                type="text"
            />
        </div>
    );
};

export default Header;