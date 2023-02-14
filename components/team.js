import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Team(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
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
      
      
    return <div style={{padding:"3rem"}} className="section-team">
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
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="react-multi-carousel-list"
        dotListClass="react-multi-carousel-dot-list"
        itemClass="carousel-item-padding-40-px"
        >
        <div class="team-box-wrapper">
         <div class="team-box">
          <img src="http://www.susamskar.com/wp-content/uploads/2022/06/iit_1647249052-300x297.jpg" width="150"/>
          <div>
           <p class="u-center-text">Dr. Nijwm Wary</p>
           <div class="teamd">
            <p class="u-center-text"> Professor, IIT Bhubaneshwar. B.Tech, M.Tech, and P.hD from IIT Kharagpur.</p>
           </div>
          </div>
         </div>
        </div>
        <div class="team-box-wrapper">
         <div class="team-box">
          <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Supriya_Hazra-1-150x150.jpg"/>
          <div>
           <p class="u-center-text">Supriya Hazra</p>
           <div class="teamd">
            <p class="u-center-text">Ex-PR and Marketing officer in Warner Bros. Inc.
</p>
           </div>
          </div>
         </div>
        </div>
        <div class="team-box-wrapper">
         <div class="team-box">
          <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Niladri-Hazra-150x150.jpg"/>
          <div>
           <p class="u-center-text">Niladri Hazra</p>
           <div class="teamd">
            <p class="u-center-text">Ex-Director of Geological Survey of India</p>
           </div>
          </div>
         </div>
        </div>
        <div class="team-box-wrapper">
         <div class="team-box">
          <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Pawan-Thakur-150x150.jpg"/>
          <div>
           <p class="u-center-text">Pawan Thakur</p>
           <div class="teamd">
            <p class="u-center-text">Physics lecturer, SVN Public School, Nahan, H.P.</p>
           </div>
          </div>
         </div>
        </div>
        <div class="team-box-wrapper">
        <div class="team-box">
          <img src="http://www.susamskar.com/wp-content/uploads/2021/07/IMG-20210708-WA0002-150x150.jpg"/>
          <div>
           <p class="u-center-text">Jayati Goswami</p>
           <div class="teamd">
            <p class="u-center-text">Head Mistress, Lakshmipat Singhania Academy, Kolkata</p>
           </div>
          </div>
         </div>
         </div>
        <div class="team-box-wrapper">
         <div class="team-box">
          <img src="http://www.susamskar.com/wp-content/uploads/2019/01/14939412_1057023777744532_275446027691481817_o-150x150.jpg"></img>
          <div>
           <p class="u-center-text">Pushkar Nawale</p>
           <div class="teamd">
            <p class="u-center-text">Director of Sarathi Academy Kharagpur; B Tech, IIT Kharagpur.
</p>
           </div>
          </div>
         </div>
        </div>
      </Carousel>;
    </div>
}




































// export default function Team(){
//     return <div>
//         <section class="section-team">
//     <div class="team">
//      <div class="swiper team-swiper swiper-initialized swiper-horizontal">
//       <div class="u-center-text">
//        <h2 class="heading-secondary">Our Team</h2>
//       </div>
		 
//       <div class="swiper-wrapper team2" id="swiper-wrapper-f2ea596ba42b415a" aria-live="off" styles={{transform: "translate3d(-910px, 0px, 0px)", transitionDuration: "0ms",}}><div class="swiper-slide swiper-slide-duplicate" role="group" aria-label="16 / 16"  data-swiper-slide-index="15">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Abha-Gupta-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Abha Gupta</p>
//            <div class="teamd">
//             <p class="u-center-text">Assistant Professor, Punjab Engineering College; PhD, IIT Kharagpur</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
       

// 		  <div class="swiper-slide swiper-slide-prev team" role="group" aria-label="1 / 16" data-swiper-slide-index="0">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2022/06/iit_1647249052-300x297.jpg" width="150"></img>
//           <div>
//            <p class="u-center-text">Dr. Nijwm Wary</p>
//            <div class="teamd">
//             <p class="u-center-text"> Professor, IIT Bhubaneshwar. B.Tech, M.Tech, and P.hD from IIT Kharagpur.</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>



//        <div class="swiper-slide swiper-slide-active team2" role="group" aria-label="2 / 16"  data-swiper-slide-index="1">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Supriya_Hazra-1-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Supriya Hazra</p>
//            <div class="teamd">
//             <p class="u-center-text">Ex-PR and Marketing officer in Warner Bros. Inc.
// </p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
//        <div class="swiper-slide swiper-slide-next team2" role="group" aria-label="3 / 16"  data-swiper-slide-index="2">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Niladri-Hazra-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Niladri Hazra</p>
//            <div class="teamd">
//             <p class="u-center-text">Ex-Director of Geological Survey of India</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
		  
// 		         <div class="swiper-slide team2" role="group" aria-label="4 / 16"  data-swiper-slide-index="3">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Pawan-Thakur-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Pawan Thakur</p>
//            <div class="teamd">
//             <p class="u-center-text">Physics lecturer, SVN Public School, Nahan, H.P.</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
// 		  <div class="swiper-slide team2" role="group" aria-label="5 / 16"  data-swiper-slide-index="4">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2021/07/IMG-20210708-WA0002-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Jayati Goswami</p>
//            <div class="teamd">
//             <p class="u-center-text">Head Mistress, Lakshmipat Singhania Academy, Kolkata</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
// 		         <div class="swiper-slide team2" role="group" aria-label="6 / 16" data-swiper-slide-index="5">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/14939412_1057023777744532_275446027691481817_o-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Pushkar Nawale</p>
//            <div class="teamd">
//             <p class="u-center-text">Director of Sarathi Academy Kharagpur; B Tech, IIT Kharagpur.
// </p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>

//        <div class="swiper-slide team2" role="group" aria-label="7 / 16"  data-swiper-slide-index="6">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Dr.-J.-Chitra-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Dr. J. Chitra</p>
//            <div class="teamd">
//             <p class="u-center-text">Doctorate in Food Process Engineering from IIT Kharagpur.</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>

//        <div class="swiper-slide team2" role="group" aria-label="8 / 16" data-swiper-slide-index="7">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Dr.-Preeti-Mishra-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Dr. Preeti Mishra</p>
//            <div class="teamd">
//             <p class="u-center-text">Director of Sarathi Academy Kharagpur; PhD,  IIT Kharagpur.
// </p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
		  
// 		         <div class="swiper-slide team2" role="group" aria-label="9 / 16"  data-swiper-slide-index="8">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2021/07/IMG-20210701-WA0004-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Sarthak Sugandhi</p>
//            <div class="teamd">
//             <p class="u-center-text">B Tech, IIT KGP SOC Design Engineer, Intel</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
//        <div class="swiper-slide team2" role="group" aria-label="10 / 16"  data-swiper-slide-index="9">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2021/07/image-150x150.png"></img>
//           <div>
//            <p class="u-center-text">Harmendra Mishra</p>
//            <div class="teamd">
//             <p class="u-center-text">B Tech, IIT KGP RF Design Engineer at Qualcomm</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
//        <div class="swiper-slide team2" role="group" aria-label="11 / 16"  data-swiper-slide-index="10">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Asha-Dalmia-150x150.jpeg"></img>
//           <div>
//            <p class="u-center-text">Asha Dalmia</p>
//            <div class="teamd">
//             <p class="u-center-text">B.Com from Bombay University</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
//        <div class="swiper-slide team2" role="group" aria-label="12 / 16"  data-swiper-slide-index="11">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Rachana-Raghavan-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Rachana Raghavan</p>
//            <div class="teamd">
//             <p class="u-center-text">Senior Analysist at Novatris; M. Tech Biotechnology, IIT Kharagpur</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>

//        <div class="swiper-slide team2" role="group" aria-label="13 / 16"  data-swiper-slide-index="12">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/V.-Ramya-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">V. Ramya</p>
//            <div class="teamd">
//             <p class="u-center-text">Post doctoral fellow, Arhaus university Denmark</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>

//        <div class="swiper-slide team2" role="group" aria-label="14 / 16"  data-swiper-slide-index="13">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Sejal-Goyal-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Shejal Goyal</p>
//            <div class="teamd">
//             <p class="u-center-text">M. Tech from Banasthali Vidyapeeth, Rajasthan.</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
//        <div class="swiper-slide team2" role="group" aria-label="15 / 16"  data-swiper-slide-index="14">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Reshmi-Bala-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Ms. Reshmi Bala</p>
//            <div class="teamd">
//             <p class="u-center-text">MS from IIT Kharagpur</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>

//        <div class="swiper-slide team2" role="group" aria-label="16 / 16"  data-swiper-slide-index="15">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2019/01/Abha-Gupta-150x150.jpg"></img>
//           <div>
//            <p class="u-center-text">Abha Gupta</p>
//            <div class="teamd">
//             <p class="u-center-text">Assistant Professor, Punjab Engineering College; PhD, IIT Kharagpur</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>


//       <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev team" role="group" aria-label="1 / 16"  data-swiper-slide-index="0">
//         <div class="team-box-wrapper">
//          <div class="team-box">
//           <img src="http://www.susamskar.com/wp-content/uploads/2022/06/iit_1647249052-300x297.jpg" width="150"></img>
//           <div>
//            <p class="u-center-text">Dr. Nijwm Wary</p>
//            <div class="teamd">
//             <p class="u-center-text"> Professor, IIT Bhubaneshwar. B.Tech, M.Tech, and P.hD from IIT Kharagpur.</p>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div></div>

//       <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
//       <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-f2ea596ba42b415a"></div>
//       <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-f2ea596ba42b415a"></div>
//      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
//     </div>
//    </section>
//     </div>
// }