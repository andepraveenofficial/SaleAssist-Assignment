import { BiRupee } from "react-icons/bi";

const Card = (props) => {
    const { cardDetails } = props
    const { image, title, price } = cardDetails

    return (
        <div className="m-4 text-white">
            <img src={image} alt={title} className="rounded-lg" />
            <h2 className="text-center">{title}</h2>
            <div>
                <div className="flex items-center"><BiRupee /><h1 className="text-2xl">{price}</h1><div className="ml-3"> <span className="line-through">8999</span> <span className="text-green-300">(50% off)</span></div></div>
            </div>
        </div >
    )
}

export default Card