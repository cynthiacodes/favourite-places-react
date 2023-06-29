import PlaceEntry from "./PlaceEntry";
import ZanzibarImage from "./assets/images/zanzibar.jpg"

function MainContent(): JSX.Element {
    return (
        <PlaceEntry
            imageURL = {ZanzibarImage}
            imageText="sunset over the Indian Ocean in Zanzibar"
            title= {"Beautiful sunset at the beach"}
            placeName= {"Zanizibar"}
            countryName= {"Tanzania"}
            mapURL= {"https://goo.gl/maps/YkieqGjkieoNo46Z9"}
            text = {"Nungwi in Zanzibar is a truly enchanting destination that combines natural beauty, underwater wonders, and a friendly atmosphere"}
        />


    );
}


export default MainContent;