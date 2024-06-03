import { NavBar, SearchBar } from './components';
import './App.css'
import { MenuIcon, NewChatIcon } from './components/Icons'

function App () {
  return (
    <div className="container">
      <div className='content-container'>
        <NavBar />
        <div className="chats-container">
          <div className="chats-header">
            <h1>Chats</h1>
            <div className="chat-actions">
              <NewChatIcon/>
              <MenuIcon/>
            </div>
          </div>
          <SearchBar/>
        </div>
      </div>
    </div>
  )
}

export default App
