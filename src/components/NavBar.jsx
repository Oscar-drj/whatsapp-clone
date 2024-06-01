import './style/NavBar.css'
import { ChatIcon, CommunityIcon } from './Icons'

export function NavBar () {
    return(
        <div className="nav-bar">
            <ChatIcon/>
            <CommunityIcon/>
        </div>
    )
}