import { BAG_ICONS_MOCK_API } from "../Constants/BAG_ICONS_MOCK_API"

const BagIcons = () => {
    console.log(BAG_ICONS_MOCK_API[0])
    return (
        <ul className="flex justify-around">
            {BAG_ICONS_MOCK_API.map((each) => <li key={each.id}>
                <img src={each.image} alt={each.title} />
                <p>{each.title}</p>
            </li>)}

        </ul>
    )
}

export default BagIcons