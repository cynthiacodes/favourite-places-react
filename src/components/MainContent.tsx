import PlaceEntry from "./PlaceEntry";


function MainContent(): JSX.Element {
    return (
        <main>
        <PlaceEntry
            imageURL = {"./assets/images/zanzibar.jpg"}
            imageText="sunset over the Indian Ocean in Zanzibar"
            title= {"Beautiful sunset at the beach"}
            placeName= {"Zanizibar"}
            countryName= {"Tanzania"}
            mapURL= {"https://goo.gl/maps/YkieqGjkieoNo46Z9"}
            text = {"Nungwi in Zanzibar is a truly enchanting destination that combines natural beauty, underwater wonders, and a friendly atmosphere"}
        />
        <PlaceEntry
            imageURL = {"./assets/images/giraffe.jpg"}
            imageText= {"giraffe in the sunset"}
            title= {"Beautiful sunset at the beach"}
            placeName= {"Maasai Mara Safari"}
            countryName= {"Kenya"}
            mapURL= {"https://goo.gl/maps/b7gnfBtx2oG2PWsP8"}
            text = {
                "As the golden sun begins to set over the vast plains of Maasai Mara, casting a warm glow across the landscape, you find yourself in awe of the breathtaking beauty that surrounds you."
            }
        />

        </main>

    );
}


export default MainContent;