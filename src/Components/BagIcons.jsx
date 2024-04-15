
// import { BAG_ICONS_MOCK_API } from "../Constants/BAG_ICONS_MOCK_API";
import useGetBagIcons from "../Hooks/useGetBagIcons";

const BagIcons = () => {
    const iconsList = useGetBagIcons();

    return (
        <ul className="flex justify-around m-3">
            {iconsList && iconsList.map((each) =>
                <li key={each.id} className="flex flex-col items-center p-2 m-2 border-white hover:rounded-lg hover:border hover:cursor-pointer size-24 md:size-auto ">
                    <img src={each.image} alt={each.title} />
                    <p className="mt-2 text-sm text-white md:text-lg">{each.title}</p>
                </li>)
            }

        </ul>
    )
}

export default BagIcons

