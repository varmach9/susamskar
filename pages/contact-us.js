import Image from "next/dist/client/image"

export default function k(){
    return <div>
        <div style={{padding:"20px"}}>.</div>
        <div style={{ display:"inline-block",paddingLeft:"10%",paddingRight:"10%", paddingTop:40,paddingBottom:0, verticalAlign:"top", fontSize:"2rem !important"}}  className='foot1' >
                    <p>Contact Us:</p>
                    <p>Address: F- 13/2, Karunamoyee Housing Estate, Sector II</p><p> Salt Lake, Kolkata – 700091</p>
                    <p> <Image src="/images/gmail.png" alt="mail" height="15" width="15"></Image> Email: susamskar @gmail.com</p>
                    <p> <Image src="/images/phone-call.png" alt="mail" height="15" width="15"></Image> Phone: 9038022870, 8670913532, 9733425118</p>
                    </div>
    </div>
}