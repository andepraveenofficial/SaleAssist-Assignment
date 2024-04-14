import { BAG_IMAGES_MOCK_API } from "../Constants/BAG_IMAGES_MOCK_API"
import Card from "./Card"

const BagImages = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {BAG_IMAGES_MOCK_API.map((each) => <Card key={each.id} cardDetails={each} />)}
        </div>
    )
}

export default BagImages