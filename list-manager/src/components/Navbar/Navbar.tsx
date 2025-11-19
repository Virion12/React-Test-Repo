import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
            <Link to="/"><span className="btn btn-ghost text-xl">JustCheck IT</span></Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link to="/my-lists">My All</Link></li>
            <li>
                <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        </div>
    );
}
export default Navbar;