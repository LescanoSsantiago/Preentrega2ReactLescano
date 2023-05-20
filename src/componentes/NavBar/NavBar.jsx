import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink, Link} from 'react-router-dom'


const NavBar = () => {
    const imgLogo = "https://img.freepik.com/premium-vector/cute-petshop-logo-with-cat-dog_454510-56.jpg?w=2000"
    return (
        <header>
            
            <h1>MASCOTIENDA</h1>
            
            <nav>
                <ul>
<li>
    <NavLink to={"/categoria/1"}>Perros</NavLink>
</li>
<li>
    <NavLink to={"/categoria/2"}>Gatos</NavLink>
</li>
<li>
    <NavLink to={"/categoria/3"}>Accesorios</NavLink>
</li>

                </ul>
            </nav>
<CartWidget/>

        </header>
    )
}

export default NavBar



// <link to={"/"}>
//                 <img className="imgLogo" src={imgLogo} alt=""/>
//             </link>