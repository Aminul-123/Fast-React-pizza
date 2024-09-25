import { Link } from "react-router-dom";

export default function Button ({children , disabled, to, type, onClick}) {
    
    if (to) return (
        <Link to={to} className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300
        focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed m-2" >
            {children}
        </Link>
    )
    return (
        <button  disabled={disabled} onClick={onClick} className="inline-block rounded-full bg-yellow-400 px-2 py-1 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300
        focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed">
            {children}
        </button>
    )
}