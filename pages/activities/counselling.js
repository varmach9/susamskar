import Link from 'next/link';

export default function k(){
    return <div style={{padding:"5%"}}>
		<div style={{padding:"10px"}}></div>
        <h1 style={{textAlign:"center", fontSize:"4rem", color:"black"}}>Counselling</h1>
        <div className="photoss" style={{justifyContent: "space-evenly"}}>
            <div className="photobox2">

            <div class="fl-callout-content">
		<h3 class="fl-callout-title"><span class="fl-callout-title-text">Counscelling</span></h3>		<div class="fl-callout-text-wrap">
			<div class="fl-callout-text"><p>Child, adolescent and parent counselling <strong>‘INNER VOICE’</strong> provides opportunity to discuss problems one-o-one with the counselor and gain insight into his/her concerns in a safe and confidential environment.&nbsp;Discussions are based on the ages, developmental levels, and specific concerns of the children and adolescents along with listening and addressing the grievances of the parents. We also provide support information and referrals in a child friendly manner.</p>
</div>		</div>
	</div>
                
            </div>
            <div className="photobox2">
            <div class="fl-photo fl-photo-crop-circle fl-photo-align-" itemscope="" itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-jpg">
				<img loading="lazy" class="fl-photo-img wp-image-470 size-full" src="http://www.susamskar.com/wp-content/uploads/bb-plugin/cache/Parents_counscelling-circle.jpg" alt="Parents_counscelling" itemprop="image" height="384" width="512" title="Parents_counscelling"/>
					</div>
	</div>
        </div>

</div>


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