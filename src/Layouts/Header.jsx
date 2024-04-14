import { AiOutlineShopping } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
    return (
        <header className="bg-gray-800 text-white min-h-14 flex justify-around p-2">
            <h1>TANN TRIM</h1>
            <nav className="align-bottom self-end">
                <ul className="flex gap-4">
                    <li>Bags</li>
                    <li>Travel</li>
                    <li>Accesories</li>
                    <li>Gifting</li>
                    <li>Jewelery</li>
                </ul>
            </nav>
            <nav className="flex gap-4">
                <AiOutlineSearch /><AiOutlineUser /><BiBookmark /><AiOutlineShopping />
            </nav>
        </header>
    )
}

export default Header
