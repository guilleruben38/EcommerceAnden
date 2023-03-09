
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../Cartwidget/CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid ">
    <Link to='/' className='success' style={{fontFamily: 'Gentium Book Plus, serif', color:'black', textDecoration:'none', fontSize:'35px'}} >Anden Sport</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item ">
          <NavLink to='Categoria/Botines'  style={{fontFamily: 'Gentium Book Plus, serif', color:'whitesmoke'}} className={({ isActive })=> isActive  ? 'btn btn-Success':'btn btn-outline-Success' } >Botines</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/Categoria/Camisetas' style={{fontFamily: 'Gentium Book Plus, serif', color:'whitesmoke'}}  className={({ isActive })=> isActive  ? 'btn btn-Success':'btn btn-outline-Success' } >Camisetas</NavLink>
        </li>    
        <li className="nav-item">
          <NavLink to='/Categoria/Pelotas'  style={{fontFamily: 'Gentium Book Plus, serif', color:'whitesmoke'}} className={({ isActive })=> isActive  ? 'btn btn-Success':'btn btn-outline-Success' } >Pelotas</NavLink>
        </li>      
        <li className="nav-item">
          <NavLink to='/Categoria/Shorts'  style={{fontFamily: 'Gentium Book Plus, serif', color:'whitesmoke'}} className={({ isActive })=> isActive  ? 'btn btn-Success':'btn btn-outline-Success' } >Shorts</NavLink>
        </li>   
        <li className="nav-item">
          <NavLink to='/Categoria/Accesorios'  style={{fontFamily: 'Gentium Book Plus, serif', color:'whitesmoke'}} className={({ isActive })=> isActive  ? 'btn btn-Success':'btn btn-outline-Success' } >Accesorios</NavLink>
        </li>   
      </ul>
      <Link to='/cart' className="d-flex" role="search" style={{color:'white', textDecoration:'none'}}>
        <CartWidget />
      </Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar