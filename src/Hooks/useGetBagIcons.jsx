import { useEffect, useState } from 'react'
import { BAG_ICONS_API } from '../Services/APIs';
import axios from 'axios';

const useGetBagIcons = () => {
    const [iconsList, setIconsList] = useState(null);


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
    return iconsList
}

export default useGetBagIcons