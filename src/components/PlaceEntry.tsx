interface PlaceEntryProps {
    title: string;
    placeName: string;
    countryName: string;
    imageURL: string;
    mapURL: string;
    text: string;
  }
  
  function PlaceEntry({title,placeName,countryName,imageURL,mapURL,text}: PlaceEntryProps): JSX.Element {
    return (
      <section>
        <img src = {imageURL} />
        <h2>{title}</h2>
        <h3>
            {placeName},{countryName} (<a href={mapURL}>map link</a>)
        </h3>
          <p>
            {text}
          </p>
      </section>
    );
  }
  
  export default PlaceEntry;