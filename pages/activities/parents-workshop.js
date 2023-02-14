import Link from "next/link"

export default function k(){
    return <div style={{padding:"10% 10%"}}>
        <div>
            <div style={{padding:"10px"}}></div>
        <h1 style={{textAlign:"center", fontSize:"4rem", color:"black",padding:"0 0 5px 0"}}>Parent’s Workshop</h1>

        </div>


        <div className="photoss" style={{justifyContent: "space-evenly"}}>
        <div className="photobox2">
        <div class="fl-photo fl-photo-crop-circle fl-photo-align-" itemscope="" itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-jpg">
				<img class="fl-photo-img wp-image-469" src="http://www.susamskar.com/wp-content/uploads/bb-plugin/cache/Parents_seminar-circle.jpg" alt="Parents_seminar" itemprop="image" title="Parents_seminar"/>
					</div>
	</div>

</div>  <div className="photobox2">
<div class="fl-callout-content">
		<h3 class="fl-callout-title"><span class="fl-callout-title-text">Parents’ workshops</span></h3>		<div class="fl-callout-text-wrap">
			<div class="fl-callout-text"><p>Parenting workshop on<strong> ‘POSITIVE PARENTING’, </strong>which explores experiential approach with an active learning model based on best practices of parenting education has been recently organized in Kolkata. The workshop is based on proper research evidenced based methodical approaches covering Twebster Stratton group, Incredible Years book and Triple P parenting.</p>
</div>		</div>
	</div>

</div>


</div>



		<div style={{padding:"10% 0"}}>
	<h3>Recent Workshop</h3>
<p>A workshop was organized by Susamskar Foundation on<strong> "Positive Parenting"</strong> on 9th February for parents of Class II and Class III at&nbsp;Bhavan's Gangabux Kanoria Vidyamandir School Auditorium. Approximately 50 parents participated in the seminar.</p>
</div>


<div >
    <img src="/images/parentsworkshop.png" alt="" width={"100%"} style={{paddingLeft:"10%",paddingRighft:"10%"}}></img>
</div>

<div><br></br><br></br></div>


        <div className="photoss" style={{justifyContent: "space-evenly"}}>
            <div className="photobox4">
            <div class="fl-cta-text">
		<h3 class="fl-cta-title">Be a part of the change</h3>
		<div class="fl-cta-text-content"><p>Susamskar foundation is non-profit organization and it runs based on the donations received from the well-wishers.</p>
</div>
	</div>
                </div>
                <div className="photobox5" style={{paddingBottom:"2rem"}}>
                <Link href="/donate"><button onclick="location.href='http://www.susamskar.com/donate/'" class="fbtn2">Donate</button></Link>
	</div>                
                

</div>


    </div>
}