import {useRouter} from "next/Router"
import { photos } from "../dummy-data";

export default function FullImage(){
    const r=useRouter()
    console.log(r.query.img)
    const image_src=photos[r.query.img];
    return <div>
        <img src={image_src} style={{width:"100%"}}></img>
    </div>
}