import { NavBar, SearchBar } from './components';
import './App.css'
import { MenuIcon, NewChatIcon } from './components/Icons'

function App () {
  return (
    <div className='container'>
      <NavBar />
      <div className="chats-container">
        <div className="chats-header">
          <h1>Chats</h1>
          <div className="chat-actions">
            <NewChatIcon/>
            <MenuIcon/>
          </div>
        </div>
      </div>
      <SearchBar/>
    </div>

  )
}

export default App
