import { photos } from "../dummy-data";
import styles from "../components/eventStyle.module.css"
import Link from "next/link"
export default function Gallery(){
    
    const arr=photos.map((x,ind)=><div key={ind} style={{margin:"auto",padding:30 , display:"inline-block" }}>
        <Link href={"/"+ind}>
            <img className={styles.hoverzoom} src={x} height="250" width="300" style={{ padding:4, border:"inset",maxwidth: "100%" }}  ></img>
        </Link></div>);
    return <div>
        <div style={{paddingTop:"10rem"}}><h1 className="text-center" style={{fontFamily:"san-serif", color:"green"}}>Gallery</h1></div>
        <div className="d-flex align-items-center" style={{padding:"0%", flexWrap:"wrap" ,flex:"0 0 33.33%"}} >
            {arr}
        </div>
    </div>
}
