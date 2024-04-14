import { useEffect, useState } from "react";
import { BAG_ICONS_API } from "../Services/APIs";
// import { BAG_ICONS_MOCK_API } from "../Constants/BAG_ICONS_MOCK_API";
import axios from "axios"

const BagIcons = () => {
    const [iconsList, setIconsList] = useState([]);


    // Methods 
    const getIconsData = async () => {
        const url = BAG_ICONS_API;
        const data = await axios.get(url)
        // console.log(data.data)
        setIconsList(data.data)
    }

    useEffect(() => {
        getIconsData()
    }, [])

    return (
        <ul className="flex justify-around">
            {iconsList && iconsList.map((each) => <li key={each.id}>
                <img src={each.image} alt={each.title} />
                <p className="mt-2 text-center text-white">{each.title}</p>
            </li>)}

        </ul>
    )
}

export default BagIcons

