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
            <p style={{color: rating > 4.0 ? "green" : "red"}}> {rating }★</p> 
            <p> $ {price}/night </p>

            </div>
    );
                                                //^ inline ternary to set red or green based on if rating is 
                                                //above 4.0 or below
}




