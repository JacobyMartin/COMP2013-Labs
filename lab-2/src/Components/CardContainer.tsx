import Card from "./Card"
import type { ResortListing } from "../data/data.ts"

interface CardContainerProps{
    listings: ResortListing[]; 
}




export default function CardContainer({listings }: CardContainerProps){
    return(
        <div className="CardContainer">
            {listings.map((list) => (
                <Card key = {list.id} {...list}/>
            ))}
        </div>
    );
}