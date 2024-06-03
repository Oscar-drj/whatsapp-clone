import { NavBar, SearchBar } from './components';
import './App.css'
import { MenuIcon, NewChatIcon } from './components/Icons'
import { SelectionBox } from './components/SelectionBox';

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
          <div className="selector-container">
            <SelectionBox text={'All'}/>
            <SelectionBox text={'Unread'}/>
            <SelectionBox text={'Groups'}/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
