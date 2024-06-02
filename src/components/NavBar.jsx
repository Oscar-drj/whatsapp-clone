import './style/NavBar.css'
import {ChannelsIcon, ClickedChatIcon, CommunityIcon, ProfileIcon, SettingsIcon, StatusIcon} from './Icons'

export function NavBar () {
  return (
    <div className='nav-bar'>
      <div className="nav-bar-top">
        <ClickedChatIcon/>
        <CommunityIcon/>
        <StatusIcon/>
        <ChannelsIcon/>
      </div>
      <div className="nav-bar-bottom">
        <SettingsIcon/>
        <ProfileIcon/>
      </div>
    </div>
  )
}
