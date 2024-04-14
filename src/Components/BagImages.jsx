import { useEffect, useState } from "react";
// import { BAG_IMAGES_MOCK_API } from "../Constants/BAG_IMAGES_MOCK_API";
import Card from "./Card";
import axios from "axios";
import { BAG_IMAGES_API } from "../Services/APIs";

const BagImages = () => {
    const [imagesList, setImagesList] = useState([]);

    // Methods 
    const getImagesData = async () => {
        const url = BAG_IMAGES_API;
        const data = await axios.get(url);
        // console.log(data.data)
        setImagesList(data.data)
    }

    useEffect(() => {
        getImagesData()
    }, [])
    return (
        <div className="flex flex-wrap justify-center">
            {imagesList.map((each) => <Card key={each.id} cardDetails={each} />)}
        </div>
    )
}

export default BagImages