import './App.css'
import Header1 from './UI/Header1'

const DUMMY_DATA = [
  {
    course1: {
      name: 'Entrepreneurship  K21 DIN19SP',
      teacher: 2,
      favorite: false,
      enrollment_code: '33W3F5UT',
    },
    course2: {
      name: 'ID00BO92 Internet of Things',
      teacher: 2,
      favorite: false,
      enrollment_code: 'SSDTT342',
    },
  },
]

function App() {
  return <Header1 />
}

export default App
