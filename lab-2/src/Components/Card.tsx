interface ResortCardProps{
  id: number;
  pic: string;
  country: string;
  location: string;
  rating: number;
  price: number;
}

export default function ResortCard({
    pic, 
    country, 
    location, 
    rating, 
    price,
}:ResortCardProps){
    return(
        <div className="ResortCard">
            <img src={pic}
            alt=""
            width="160px" />

            <p style={{fontWeight: "bolder"}}> {country}</p>
            <p> {location}</p>
            <p style={{color: rating > 4 ? "green" : "red"}}> {rating }★</p> // inline ternary to assign either red or green to rating text
            <p> $ {price}/night </p>

            </div>
    );

}




