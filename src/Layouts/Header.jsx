import { AiOutlineShopping } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const NAV_ITEMS = [{ id: 1, item: "Bags" }, { id: 2, item: "Travel" }, { id: 3, item: "Accesories" }, { id: 4, item: "Gifting" }, { id: 5, item: "Jewelery" }]

const Header = () => {
    return (
        <header className="flex justify-around p-2 text-white bg-gray-900 min-h-14">
            <h1 className="text-3xl">TANN TRIM</h1>
            <nav className="self-end align-bottom">
                <ul className="hidden gap-4 text-xl md:flex">
                    {NAV_ITEMS.map((each) => <li key={each.id} className="p-2 hover:bg-slate-500 hover:rounded-lg hover:cursor-pointer">{each.item}</li>)}
                </ul>
            </nav>
            <nav className="flex gap-4">
                <AiOutlineSearch className="size-7 hover:cursor-pointer" />
                <AiOutlineUser className="size-7 hover:cursor-pointer" />
                <BiBookmark className="size-7 hover:cursor-pointer" />
                <AiOutlineShopping className="size-7 hover:cursor-pointer" />
            </nav>
        </header>
    )
}

export default Header
