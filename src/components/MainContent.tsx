import PlaceEntry from "./PlaceEntry";
import { myEntries } from "../entriesData";
import { Fragment } from "react";

function MainContent(): JSX.Element {
  const listEntries = myEntries.map((entry) => (
    <Fragment key={entry.placeName}>
      <PlaceEntry
        imageURL={entry.imageURL}
        imageText={entry.imageText}
        title={entry.title}
        placeName={entry.placeName}
        countryName={entry.countryName}
        mapURL={entry.mapURL}
        text={entry.text}
      />
    </Fragment>
  ));
  return <main>{listEntries}</main>;
}

export default MainContent;
