import Link from 'next/link';

export default function k(){
    return <div style={{padding:"5%"}}>
		<div style={{padding:"10px"}}></div>
        <h1 style={{textAlign:"center", fontSize:"4rem", color:"black"}}>Teacher's Seminar</h1>
        <div className="photoss" style={{justifyContent: "space-evenly"}}>
            <div className="photobox2">

            <div class="fl-callout-content">
		<h3 class="fl-callout-title"><span class="fl-callout-title-text">Teachers’ seminars</span></h3>		<div class="fl-callout-text-wrap">
			<div class="fl-callout-text"><p>The workshop for the teachers <strong>‘WEAVING VALUES THROUGH TEACHING’ </strong>was recently conducted in Kolkata and Kharagpur for the newly inducted faculty of Kendriya Vidyalaya Schools, Eastern Zone. The workshop includes progressive approach for imparting teachers’ explicit and implicit core universal value systems and life skills that is associated with academic curriculum and deep rooted principles, embedded in school and classroom practices. All of these different methods integrate hands-on strategies and problem-solving activities into daily teaching practices.</p>
</div>		</div>
	</div>

            </div>
            <div className="photobox2">
            <div class="fl-photo fl-photo-crop-circle fl-photo-align-" itemscope="" itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-jpg">
				<img loading="lazy" class="fl-photo-img wp-image-468 size-full" src="http://www.susamskar.com/wp-content/uploads/bb-plugin/cache/Teachers_seminar-circle.jpg" alt="Teachers_seminar" itemprop="image" height="2448" width="3264" title="Teachers_seminar"/>
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