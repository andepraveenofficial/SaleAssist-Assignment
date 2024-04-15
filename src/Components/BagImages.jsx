// import { BAG_IMAGES_MOCK_API } from "../Constants/BAG_IMAGES_MOCK_API";
import Card from "./Card";
import useGetBagImages from "../Hooks/useGetBagImages";
import BagImagesShimmerUI from "../ShimmerUI/BagImagesShimmerUI";

const BagImages = () => {
    const imagesList = useGetBagImages();

    return (
        <div className="flex flex-wrap justify-center">
            {
                !imagesList ?
                    [1, 2, 3, 4, 5, 6, 7, 8].map((each, index) => <BagImagesShimmerUI key={index} />)
                    :
                    imagesList.map((each) => <Card key={each.id} cardDetails={each} />)
            }


        </div>
    )
}

export default BagImages