import {} from 'react'
import { NavLink } from 'react-router-dom'


function Nav(){
    return(
        <> 
        <ul className='nav-lista'>
            <li>
                <NavLink to="/" className='nav-item'>Home</NavLink>
            </li>
            <li>
                <NavLink to="/Produtos" className='nav-item'>Produtos</NavLink>
            </li>
            <li>
                <NavLink to="/Sobre" className='nav-item'>Sobre</NavLink>
            </li>
        </ul>
        </>
    )
}

export default Nav