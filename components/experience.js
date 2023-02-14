import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Team(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const CustomLeftArrow = ({ onClick }) => {
        return (
          <IconButton
            style={{ pointer: "cursor", htmlColor: "red" }}
            onClick={onClick}
          >
            <ArrowLeft />
          </IconButton>
        );
      };
      
      const CustomRightArrow = ({ onClick }) => {
        return (
          <IconButton
            style={{ pointer: "cursor", htmlColor: "red" }}
            onClick={onClick}
          >
            <ArrowRight />
          </IconButton>
        );
      };
      
      
    return <div style={{padding:"3rem"}} className="section-testimonials">
        <div class="u-center-text"  style={{padding:"3rem"}}>
       <h2 class="heading-secondary">Our Team</h2>
      </div>
        <Carousel responsive={responsive}
        focusOnSelect={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        // customRightArrow={<CustomRightArrow />}
        // customLeftArrow={<CustomLeftArrow/>}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="react-multi-carousel-list"
        dotListClass="react-multi-carousel-dot-list"
        itemClass="carousel-item-padding-40-px"
        >
            <div class="testimonial-box-wrapper">
         <div class="testimonial-box">
          <img src="http://www.susamskar.com/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-19-at-21.32.15-150x150.jpeg"/>
          <div>
           <p>With the help of Susamskar, I can serve in shaping helping future of currentt generation.</p>
           <div class="testd">
           <p class="u-right-align">
            IIT Kharagpur <br/>
            Phd Student, Computer Science
           </p>
           </div>
          </div>
         </div>
        </div>
            <div class="testimonial-box-wrapper">
         <div class="testimonial-box">
          <img src="http://www.susamskar.com/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-19-at-21.35.54-150x150.jpeg"/>
          <div>
           <p>Being a part of Susamsakar Foundation I feel proud and thankful.</p>
          
           <div class="testd">
            <p class="u-right-align">
            IIT Kharagpur <br/>
            Phd Student, Aerospace Engineering
           </p>
           </div>
          </div>
         </div>
        </div>
         <div class="testimonial-box-wrapper">
         <div class="testimonial-box">
          <img src="http://www.susamskar.com/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-19-at-21.35.53-e1563613009238-150x150.jpeg"/>
          <div>
           <p>This service would let me go through the learning process and help my character development.</p>
            <div class="testd">
           <p class="u-right-align">
            IIT Kharagpur <br/>
            MS (Research) BioTechnology
           </p>
           </div>
          </div>
         </div>
        </div>
        </Carousel>;
      </div>
      }