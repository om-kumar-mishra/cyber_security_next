import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import  { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Features from './Features';

// export const getServerSideProps = async () => {
//     const res = await fetch("http://alobhaitsolution.com:5005/api/banner")

//     // const resp = await fetch("https://jsonplaceholder.typicode.com/posts")

//     //const resp_data = await resp.json();
//     const data = await res.json();
//     console.log(data)
//     return {
//         props: {
//             // resp_data:resp_data,
//             data: data
//         }
//     }
// }




const MainBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    const [getdata, setData] = useState([]);

    // useEffect(() => {
    //     axios.get('http://alobhaitsolution.com:5005/api/banner')
    //     .then(function (response) {
    //       // handle success
    //     //    console.log(response.data.data[0].title)
    //        let d=response.data.data
         
    //       setData(d)
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    //   },[]);
   
   setTimeout(() => {
    axios.get('http://alobhaitsolution.com:5005/api/banner')
    .then(function (response) {
      // handle success
    //    console.log(response.data.data[0].title)
       let d=response.data.data
     
      setData(d)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   }, 500);
    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel='youtube'
                isOpen={!isOpen}
                videoId='bk7McNUjWgw'
                onClose={() => setIsOpen(!isOpen)}
            />

            <section className="banner-area  jarallax" style={{backgroundImage:`url(http://alobhaitsolution.com:5005/uploaded-files/${getdata?.image})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="banner-text">
                                <span>{getdata?.title}</span>
                                <h1>{getdata?.sub_title}</h1>
                                <p>{getdata?.details?.replace(/(<([^>]+)>)/ig, '')}</p>
                            
                                <div className="banner-btn">
                                    <Link href="/about">
                                        <a className="default-btn">
                                            About Us
                                        </a>
                                    </Link>
                                    {/* <Link href="/about">
                                        <a className="default-btn active">
                                            About Us
                                        </a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            {/* <div className="video-btn-animat one">
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="bx bx-play"></i>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Features */}
                <Features />

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </section>
        </>
    )
}

export default MainBanner;