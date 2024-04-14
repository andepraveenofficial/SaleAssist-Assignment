// import { BAG_IMAGES_MOCK_API } from "../Constants/BAG_IMAGES_MOCK_API";
import Card from "./Card";
import useGetBagImages from "../Hooks/useGetBagImages";

const BagImages = () => {
    const imagesList = useGetBagImages();
    return (
        <div className="flex flex-wrap justify-center">
            {imagesList.map((each) => <Card key={each.id} cardDetails={each} />)}
        </div>
    )
}

export default BagImages