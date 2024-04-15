import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";

const Card = (props) => {
    const { cardDetails } = props
    const { image, title, price, currentPrice, discount } = cardDetails

    return (
        <div className="m-4 text-white rounded-lg hover:scale-105 hover:cursor-pointer hover:shadow-lg bg-slate-800 hover:shadow-stone-700">
            <img src={image} alt={title} className="rounded-lg" />
            <h2 className="mt-2 text-center">{title}</h2>
            <div className="flex justify-between p-2">
                <div className="flex items-center">
                    <BiRupee />
                    <h1 className="text-2xl">{currentPrice}</h1>
                    <div className="ml-3">
                        <span className="line-through">{price}</span>
                        <span className="text-green-300">({discount} off)</span>
                    </div>
                </div>
                <HiOutlineShoppingBag className="size-8" />
            </div>
        </div >
    )
}

export default Card