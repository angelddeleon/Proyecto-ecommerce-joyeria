import { Link } from 'react-router';

function MenuItemClient({ to, text, currentPath, icon }) {
    const isActive = currentPath === to;

    return (
        <li className="w-full ">
            <Link
                to={to}
                className={`flex items-center justify-center w-full py-4 px-4 text-center hover:bg-gray-600/50 hover:text-white rounded transition-colors ${
                    isActive ? 'bg-gray-600/50' : ''
                }`}
            >
                {icon && <span className="mr-2">{icon}</span>}
                {text}
            </Link>
        </li>
    );
}

export default MenuItemClient;