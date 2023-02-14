import Image from 'next/image'
import Link from 'next/link';
import "./eventStyle.module.css"
import Mapcomponent from "./map"

export default function MyFooter(){

    return <div className="footer" style={{textAlign:"center", backgroundColor:"#F1F6F5", width:"100%"}}>
                
                
                    <div style={{padding:0 , display:"inline-block"}}>
                        <Mapcomponent></Mapcomponent>
                    </div>
                    <div style={{ display:"inline-block",paddingLeft:"5%",paddingRight:"0%", paddingTop:40,paddingBottom:0, verticalAlign:"top", fontSize:"2rem !important"}}  className='foot1' >
                    <p>Contact Us:</p>
                    <p>Address: F- 13/2, Karunamoyee Housing Estate, Sector II</p><p> Salt Lake, Kolkata – 700091</p>
                    <p> <Image src="/images/gmail.png" alt="mail" height="15" width="15"></Image> Email: susamskar @gmail.com</p>
                    <p> <Image src="/images/phone-call.png" alt="mail" height="15" width="15"></Image> Phone: 9038022870, 8670913532, 9733425118</p>
                    </div>
                    <div class="fdbtn"> 
                    <Link href="/get-involved"><button onclick="location.href='/get-involved/'" class="fbtn1">Get Involved</button></Link>
                    <Link href="/donate"><button onclick="location.href='/donate/'" class="fbtn2">Donate</button></Link>
        </div>
                </div>
            
}