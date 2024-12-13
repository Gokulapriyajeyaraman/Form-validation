import './Swipper.css'
// export default function Usage() {

//     return (
//         <>
//         <main>
//         <swiper-container style={
//             {
//             "--swiper-navigation-color": "#fff", 
//             "--swiper-pagination-color": "#fff"
//             }
//         } 
    
//         pagination-clickable="true" 
//         navigation="true"
//         effect="cube"
//         grab-cursor="true"
//         cube-effect-shadow="true"
//         cube-effect-slide-shadows="true"
//         cube-effect-shadow-offset="20"
//         cube-effect-shadow-scale="0.94"
    
//         className="mySwiper">
//                 <swiper-slide >
//                     <img src="/image.jpg"  alt="" />
//                 </swiper-slide>
    
//                 <swiper-slide>
//                     <img src="/images2.jpg" alt="" />
//                 </swiper-slide>
    
//                 <swiper-slide>
//                     <img src="/image3.jpg" alt="" />
//                 </swiper-slide>
    
//                 <swiper-slide>
//                     <img src="/image.jpg" alt="" />
//                 </swiper-slide>
    
//                 <swiper-slide>
//                         <img src="/images2.jpg" alt="" />
//                 </swiper-slide>
//             </swiper-container>
//         </main>
//         </>
//     )
//     }

export default function Usage() {

    return (
        <>
        <main>
        <swiper-container style={
            {
            "--swiper-navigation-color": "#fff", 
            "--swiper-pagination-color": "#fff"
            }
        } 
        pagination-clickable="true" 
        navigation="true" 
        className="mySwiper">
                <swiper-slide lazy="true">
                    <img src="/images2.jpg" loading="lazy" alt="" />
                </swiper-slide>
    
                <swiper-slide lazy="true">
                    <img loading="lazy" src="/image.jpg" alt="" />
                </swiper-slide>
    
                <swiper-slide lazy="true">
                    <img loading="lazy" src="/image3.jpg" alt="" />
                </swiper-slide>
    
                <swiper-slide lazy="true">
                    <img loading="lazy"  src="/image.jpg" alt="" />
                </swiper-slide>
    
                <swiper-slide lazy="true">
                        <img loading="lazy" src="/images2.jpg" alt="" />
                </swiper-slide>
            </swiper-container>
        </main>
        </>
    )
    }