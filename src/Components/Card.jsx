
const Card = (props) => {
    const { cardDetails } = props
    const { image, title, price } = cardDetails

    return (
        <div className="m-4 text-white">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h2>{price}</h2>
        </div >
    )
}

export default Card