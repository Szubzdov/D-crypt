import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <header className="h-16 border-b-2 border-green-500 flex items-center justify-around">
            <p className="text-xl font-bold"><i className="text-green-300">D</i>-crypt</p>
            <div className="*:mx-2 *:px-5 *:border-b-2 *:border-green-800 *:text-green-700">
                <Link to='/' className="hover:bg-green-500 shadow-inner shadow-green-300">Menu</Link>
                <Link to='/contacts' className="hover:bg-green-500 shadow-inner shadow-green-300">Contacts</Link>
                <Link className="hover:bg-green-500 shadow-inner shadow-green-300">Menu</Link>
                <Link className="hover:bg-green-500 shadow-inner shadow-green-300">Menu</Link>
            </div>
        </header>
    )
}

export default Header