import PlaceEntry from "./PlaceEntry";
import { myEntries } from "../entriesData";

function MainContent(): JSX.Element {
  return (
    <main>
      {myEntries[0].title}
      <PlaceEntry
        imageURL={"/images/zanzibar.jpg"}
        imageText="sunset over the Indian Ocean in Zanzibar"
        title={"Beautiful sunset at the beach"}
        placeName={"Zanizibar"}
        countryName={"Tanzania"}
        mapURL={"https://goo.gl/maps/YkieqGjkieoNo46Z9"}
        text={
          "Nungwi in Zanzibar is a truly enchanting destination that combines natural beauty, underwater wonders, and a friendly atmosphere."
        }
      />
      <PlaceEntry
        imageURL={"/images/giraffe.jpg"}
        imageText={"giraffe in the sunset"}
        title={"Seeing Giraffes in their natural habitat"}
        placeName={"Maasai Mara Safari"}
        countryName={"Kenya"}
        mapURL={"https://goo.gl/maps/b7gnfBtx2oG2PWsP8"}
        text={
          "As the golden sun begins to set over the vast plains of Maasai Mara, casting a warm glow across the landscape, you find yourself in awe of the breathtaking beauty that surrounds you."
        }
      />
      <PlaceEntry
        imageURL={"/images/lyme-park.jpg"}
        imageText={"picnic at lyme park"}
        title={"Picnic at Lyme Park"}
        placeName={"Cheshire"}
        countryName={"England"}
        mapURL={"https://goo.gl/maps/tk1wNeDQx14xX13FA"}
        text={
          "Lyme Park is an enchanting estate that seamlessly combines stunning landscapes, grand architecture, and a rich history."
        }
      />
      <PlaceEntry
        imageURL={"/images/suzhou.jpg"}
        imageText={"walking through the Venice of China"}
        title={"Walking through the Venice of China"}
        placeName={"Suzhou"}
        countryName={"China"}
        mapURL={"https://goo.gl/maps/sUaHa7TJcVmpcqk77"}
        text={
          'Suzhou, often referred to as the "Venice of China," is a city renowned for its enchanting waterways, classical gardens, and rich cultural heritage.'
        }
      />
    </main>
  );
}

export default MainContent;
