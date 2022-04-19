import {BiLogIn} from 'react-icons/bi'
// import {GoSignOut} from 'react-icons/go'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
       <div className='logo'>
          <Link to='/'>Send e-Mail</Link>
       </div>
       <ul>
         <li>
            <Link to='/logged'>
               <BiLogIn/> Login
               </Link>
         </li>
       </ul>
    </header>
  )
}

export default Header