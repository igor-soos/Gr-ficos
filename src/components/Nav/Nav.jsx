import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='bg-blue-800 text-white p-6'>
      <Link to="/" className='text-2x1 font-bold p-6'>Home</Link>
      <Link to="/grafico" className='text-2x1 font-bold'>Gráfico</Link>
    </header>
    
  )
}

export default Nav