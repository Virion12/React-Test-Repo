import { useState } from 'react'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Hero from './components/Hero/Hero'
import { BrowserRouter, Route, Routes } from 'react-router'
import { mockBoardList } from './Mock/MockList'
import KanbanList from './components/KanabanLists/KanbanList'
import BoardLists from './components/BoardLists/Lists'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  const [] = useState(0)

  return (
    <Provider store={store}>
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path='/' element={<Hero/>}></Route>
          <Route path='/my-lists' element={<BoardLists/>}></Route>
          <Route path='/my-lists/:name' element={<KanbanList/>}></Route>
        </Routes>
      </RootLayout>
    </BrowserRouter>
    </Provider>
  )
}

export default App
