import { useEffect, useState } from 'react'
import { BAG_IMAGES_API } from '../Services/APIs';
import axios from 'axios';

const useGetBagImages = () => {
    const [imagesList, setImagesList] = useState(null);

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
    return imagesList
}

export default useGetBagImages