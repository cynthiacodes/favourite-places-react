import './App.css';

interface PlaceEntryProps {
    title: string;
    placeName: string;
    countryName: string;
    imageURL: string;
    imageText: string;
    mapURL: string;
    text: string;
  }
  
  function PlaceEntry({title,placeName,countryName,imageURL,imageText,mapURL,text}: PlaceEntryProps): JSX.Element {
    return (
      <section>
        <img className= 'entry-image' src = {imageURL}  alt = {imageText} />
        <h2 className = 'entry-title'>{title}</h2>
        <h3 className='entry-location'>
        {placeName},{countryName} (<a className = 'google-link' href={mapURL}>map link</a>)
        </h3>
        <p className='entry-text'>
        {text}
        </p>
      </section>
    );
  }
  
  export default PlaceEntry;