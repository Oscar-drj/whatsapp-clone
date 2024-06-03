import { SearchIcon } from "./Icons";
import './style/SearchBar.css'

export function SearchBar() {
    return(
        <div className="search-bar">
            <div className="search-bar-container">
                <div className="search-bar-content">
                    <button className="search-bar-btn">
                        <SearchIcon />
                    </button>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
        </div>
    )
}