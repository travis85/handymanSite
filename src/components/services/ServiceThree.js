import React from 'react';
import { FaRegLightbulb, FaToilet  } from 'react-icons/fa';
import { BiFridge, BiCabinet } from 'react-icons/bi';
import { GiSpikedFence  } from 'react-icons/gi';
import {MdHouseSiding} from 'react-icons/md'
import { TfiRulerAlt2 } from 'react-icons/tfi'
import {HiSquare2Stack} from 'react-icons/hi2'

export default class ServiceThree extends React.Component {
   
    render(){
        const publicUrl = process.env.PUBLIC_URL + '/'
        const services = [
            'Kitchen Remodel', 'Bathroom Remodel', 'Electrical', 'Plumbing', 'Siding', 'Lighting', 'Privacy Fences', 'Drain Cleaning',
            'Flooring', 'Back Splash', 'Junk Removal', 'Trench Digging', 'T.V. Mounting', 'Drywall', 'Painting', 'Tree Triming', 'Door Installs',
            'Ceiling Fan Install', `acoustical ceilings`, 'Power Washing', 'HVAC', 'Demolition', 'Product Assemble', `Deck / Patio's`
        ]
        return (
            <>
                <section className="services-three">
                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/services-v3-shape1.png"} alt="#" /></div>
                    <div className="shape2 rotate-me"><img src={publicUrl+"assets/images/update1.0/services-v3-shape2.png"} alt="#" /></div>
                    <div className="container">
                        <div className="serviceHeader">
                            <div className="col-xl-12">
                                <div className="services-three__top">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <span className="left"></span><h6> COMPANY SERVICES </h6> <span className="right"></span> <br/>
                                            <p> If you dont see what you need give us a call! </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {services.map((service) => {
                                return (
                                    <div className="col-xl-3 col-lg-6 col-md-6">
                                        <div className="services-three__single">
                                            <h3 className="services-three__text">{service}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}


// const publicUrl = process.env.PUBLIC_URL + '/'
//         return (
//             <>
//                 <section className="services-three">
//                     <div className="shape1"><img src={publicUrl+"assets/images/shapes/services-v3-shape1.png"} alt="#" /></div>
//                     <div className="shape2 rotate-me"><img src={publicUrl+"assets/images/update1.0/services-v3-shape2.png"} alt="#" /></div>
//                     <div className="container">
//                         <div className="serviceHeader">
//                             <div className="col-xl-12">
//                                 <div className="services-three__top">
//                                     <div className="sec-title">
//                                         <div className="sec-title__tagline">
//                                             <span className="left"></span><h6> COMPANY SERVICES </h6> <span className="right"></span> <br/>
//                                             <p> If you dont see what you need give us a call! </p>
//                                         </div>
//                                     </div>
                                    
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="row">
//                             {/* Start Services One Single */}
//                             <div className="col-xl-3 col-lg-6 col-md-6">
//                                 <div className="services-three__single">
//                                     <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/laminateFloorLaying.jpeg)'}}></div>
//                                     <div className="services-three__single-icon">
//                                         <TfiRulerAlt2 size='75px' color="FF5D15"/>
//                                     </div>
//                                     <h3 className="services-three__text">Flooring</h3>
                                    
//                                 </div>
//                             </div>
//                             {/* End Services One Single */}

//                             {/* Start Services One Single */}
//                             <div className="col-xl-3 col-lg-6 col-md-6">
//                                 <div className="services-three__single">
//                                     <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/kitchenRemodel.jpeg)'}}></div>
//                                     <div className="services-three__single-icon">
//                                         < BiFridge size='75px' color="FF5D15" />
//                                     </div>
//                                     <h3 className="services-three__text">Kitchen Remodel</h3>
//                                 </div>
//                             </div>
//                             {/* End Services One Single */}

//                             {/* Start Services One Single */}
//                             <div className="col-xl-3 col-lg-6 col-md-6">
//                                 <div className="services-three__single">
//                                     <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/bathroomRemodel.jpeg)'}}></div>
//                                     <div className="services-three__single-icon">
//                                         <FaToilet size='75px' color="FF5D15"/>
//                                     </div>
//                                     <h3 className="services-three__text">Bathroom Remodel</h3>
//                                 </div>
//                             </div>
//                             {/* End Services One Single */}

//                             {/* Start Services One Single */}
//                             <div className="col-xl-3 col-lg-6 col-md-6">
//                                 <div className="services-three__single">
//                                     <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/recessedLights.jpeg)'}}></div>
//                                     <div className="services-three__single-icon">
//                                         <FaRegLightbulb size='75px' color="FF5D15"/>
//                                     </div>
//                                     <h3  className="services-three__text">Lighting</h3>
//                                 </div>
//                             </div>
//                             {/* End Services One Single */}
//                             {/* Start Services One Single */}
//                             <div className="col-xl-3 col-lg-6 col-md-6">
//                                 <div className="services-three__single">
//                                     <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/privacyFence.jpeg)'}}></div>
//                                     <div className="services-three__single-icon">
//                                         < GiSpikedFence size='75px' color="FF5D15"/>
//                                     </div>
//                                     <h3 className="services-three__text">Privacy Fences</h3>
//                                 </div>
//                             </div>
//                             {/* End Services One Single */}
//                             {/* Start Services One Single */}
//                             <div className="col-xl-3 col-lg-6 col-md-6">
//                                 <div className="services-three__single ">
//                                     <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/vinylSiding.jpeg)'}}></div>
//                                     <div className="services-three__single-icon">
//                                         < MdHouseSiding size='75px' color="FF5D15"/>
//                                     </div>
//                                     <h3 className="services-three__text">Vinyl Siding</h3>
//                                 </div>
//                             </div>
//                             {/* End Services One Single */}
//                             {/* Start Services One Single */}
//                             <div className="col-xl-3 col-lg-6 col-md-6">
//                                 <div className="services-three__single ">
//                                     <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/productAssembly.jpeg)'}}></div>
//                                     <div className="services-three__single-icon">
//                                         <BiCabinet size='75px' color="FF5D15"/>
//                                     </div>
//                                     <h3 className="services-three__text">Product Assembly</h3>
//                                 </div>
//                             </div>
//                             {/* End Services One Single */}
//                             {/* Start Services One Single */}
//                             <div className="col-xl-3 col-lg-6 col-md-6">
//                                 <div className="services-three__single ">
//                                     <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/dropCeiling-.webp)'}}></div>
//                                     <div className="services-three__single-icon">
//                                         <HiSquare2Stack size='75px' color="FF5D15"/>
//                                     </div>
//                                     <h3 className="services-three__text">Drop Ceiling's</h3>
//                                 </div>
//                             </div>
//                             {/* End Services One Single */}
//                         </div>
//                     </div>
//                 </section>
//             </>
//         )