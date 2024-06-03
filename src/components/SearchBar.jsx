import { SearchIcon } from "./Icons";
import './style/SearchBar.css'

export function SearchBar() {
    return(
        <div className="search-bar">
            <div className="search-bar-content">
                <button>
                    <SearchIcon />
                </button>
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    )
}