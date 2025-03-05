import React, { useState } from 'react'
import Avtarim from '../../assets/images/Blog/avtar.png'
import Economic_Policy1 from '../../assets/images/news/May3_nigeria.jpg'
import Economic_Policy2 from '../../assets/images/news/May3_mineral.jpg'
import Economic_Policy4 from '../../assets/images/news/47909627.jpg'
import Economic_Policy6 from '../../assets/images/news/May1SMART.jpg'
import Economic_Policy7 from '../../assets/images/news/May2_India.jpg'
import Arrows from '../../assets/images/Blog/Arrows.png'
import NewsList from './NewsList/NewsList'
import Card from 'react-bootstrap/Card';

// News PDF
import newsPdf1 from '../../assets/images/news/news-pdf/RS DDN-CITY- 30.07.2024.pdf'
import newsPdf2 from '../../assets/images/news/news-pdf/RS-DELHI CITY-30-7-2024.pdf'
import newsPdf3 from '../../assets/images/news/news-pdf/page29a.pdf'
import newsPdf4 from '../../assets/images/news/news-pdf/RS-DELHI CITY-4-3-2025.pdf'
import newsPdf5 from '../../assets/images/news/news-pdf/RS-UP-4-3-2025.pdf'

// news pdf thumbnails
import thumb1 from '../../assets/images/news/headlines/rs-ddn-city.webp'
import thumb2 from '../../assets/images/news/headlines/29-a.webp'
import thubm4 from '../../assets/images/news/headlines/thumb-4.webp'
import thubm5 from '../../assets/images/news/headlines/updated-thumb.webp'



// News Thumbnails (Headlines)
import headline1 from '../../assets/images/news/headlines/headline-1.webp'
import headline2 from '../../assets/images/news/headlines/headline-2.webp'
import headline3 from '../../assets/images/news/headlines/headline-3.webp'
import headline4 from '../../assets/images/news/headlines/headline-4.webp'
import headline5 from '../../assets/images/news/headlines/headline-5.webp'
import headline6 from '../../assets/images/news/headlines/headline-6.webp'
import headline7 from '../../assets/images/news/headlines/headline-7.webp'
import headline8 from '../../assets/images/news/headlines/headline-8.webp'
import headline10 from '../../assets/images/news/headlines/headline-10.webp'



// Full news here
import News1 from '../../assets/images/news/headlines/news-1.jpg'
import News2 from '../../assets/images/news/headlines/full-news/news-2.jpg'
import News3 from '../../assets/images/news/headlines/full-news/news-3.jpg'
import News4 from '../../assets/images/news/headlines/full-news/news-4.jpg'
import News5 from '../../assets/images/news/headlines/full-news/news-5.jpg'
import News6 from '../../assets/images/news/headlines/full-news/news-6.jpg'
import News7 from '../../assets/images/news/headlines/full-news/news-7.jpg'
import News8 from '../../assets/images/news/headlines/full-news/news-8.jpg'
import News10 from '../../assets/images/news/headlines/full-news/news-10.jpg'
import { Button, Modal } from 'react-bootstrap'


// import { Link } from 'react-router-dom'


export default function News() {

  const [selectedImage, setSelectedImage] = useState(null); // Stores the clicked image
  const [showModal, setShowModal] = useState(false); // Controls modal visibility

  // Function to handle image click
  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  const cardsData = [

    // New news here
    {
      id: 4,
      imageSrc: thumb1,
      Icon: Avtarim,
      Arrow: Arrows,
      url: newsPdf1,
      heading: 'Admin',
      Date: 'July 30, 2024',
      titles: "कोचिंग हादसा : आक्रोश के बीच एक्शन शुरू",
      text: '01 MAY 2024: The Ministry of Earth Sciences...',
    },
    {
      id: 4,
      imageSrc: thubm5,
      Icon: Avtarim,
      Arrow: Arrows,
      url: newsPdf2,
      heading: 'Admin',
      Date: 'July 30, 2024',
      titles: "कोचिंग हादसा : आक्रोश के बीच एक्शन शुरू",
      text: '01 MAY 2024: The Ministry of Earth Sciences...',
    },
    {
      id: 4,
      imageSrc: thumb2,
      Icon: Avtarim,
      Arrow: Arrows,
      url: newsPdf3,
      heading: 'Admin',
      Date: 'July 30, 2024',
      titles: "मोदी की विदेश नीति और महिला सशक्तिकरण पुस्तक का हुआ विमोचन",
      text: '01 MAY 2024: The Ministry of Earth Sciences...',
    },
    {
      id: 4,
      imageSrc: thubm4,
      Icon: Avtarim,
      Arrow: Arrows,
      url: newsPdf4,
      heading: 'Admin',
      Date: 'July 30, 2024',
      titles: "समझनी होगी अभिव्यक्ति की आजादी",
      text: '01 MAY 2024: The Ministry of Earth Sciences...',
    },
    
    {
      id: 6,
      imageSrc: Economic_Policy6,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Admin',
      Date: 'May 01, 2024',
      url: "news/smart-system-flight-tested-by-drdo",
      titles: "SMART System Flight-Tested by DRDO",
      text: '1 MAY 2024: The Supersonic Missile-Assisted Release...',
    },

    {
      id: 7,
      imageSrc: Economic_Policy7,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Admin',
      Date: 'May 02, 2024',
      url: "news/11th-India-new-zealand-jtc-meeting-held",
      titles: "11th India - New Zealand JTC Meeting Held ",
      text: '2 MAY 2024: A delegation led by the Commerce Secretary...',
    },
    {


      id: 1,
      imageSrc: Economic_Policy1,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Admin',
      Date: 'May 03, 2024',
      url: "news/2nd-session-of-India-nigeria-joint-trade-committee-held",
      titles: "2nd Session of India-Nigeria Joint Trade Committee Held",
      text: '3 May 2024: A seven-member delegation from India...',
    },
    {
      id: 2,
      imageSrc: Economic_Policy2,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Admin',
      Date: 'May 03, 2024',
      url: "news/India-witnesses-8percentage-growth-in-mineral-production",
      titles: "India Witnesses 8% Growth in Mineral Production",
      text: '3 MAY 2024: The index of mineral production...',
    },

    {
      id: 4,
      imageSrc: Economic_Policy4,
      Icon: Avtarim,
      Arrow: Arrows,
      url: "news/india-to-host-ACTM-46-CEP-26-in-may",
      heading: 'Admin',
      Date: 'May 01, 2024',
      titles: "India to Host ACTM 46 & CEP 26 in May",
      text: '01 MAY 2024: The Ministry of Earth Sciences...',
    },
  




  ];
  // Headline below popup
  const newsHeadline = [
    {
      id: 1,
      img: headline1,
      heading: "Admin",
      title: "'मोदी की विदेश नीति' और 'महिला सशक्तिकरण' पुस्तक का लोकार्पण",
      Date: 'March 03, 2025',
      Icon: Avtarim,
      fullNews: News1,
    },
    {
      id: 2,
      img: headline2,
      heading: "Admin",
      title: "महासत्संग आनंदम में श्री श्री ने किया दो पुस्तकों का विमोचन",
      Date: 'March 03, 2025',
      Icon: Avtarim,
      fullNews: News2,
    },
    {
      id: 3,
      img: headline3,
      heading: "Admin",
      title: "'मोदी की विदेश नीति' और 'महिला सशक्तिकरण' पुस्तक का विमोचन",
      Date: 'March 03, 2025',
      Icon: Avtarim,
      fullNews: News3,
    },
    {
      id: 4,
      img: headline4,
      heading: "Admin",
      title: "मोदी की विदेश नीति और महिला सशक्तिकरण पुस्तक का लोकार्पण",
      Date: 'March 03, 2025',
      Icon: Avtarim,
      fullNews: News4,
    }, 
    {
      id: 6,
      img: headline5,
      heading: "Admin",
      title: "'मोदी की विदेश नीति' और 'महिला सशक्तिकरण' पुस्तक का लोकार्पण",
      Date: 'March 04, 2025',
      Icon: Avtarim,
      fullNews: News5,
    },
    {
      id: 7,
      img: headline6,
      heading: "Admin",
      title: "'वो 17 दिन' का धामी ने किया विमोचन",
      Date: 'March 04, 2025',
      Icon: Avtarim,
      fullNews: News6,
    },
    {
      id: 8,
      img: headline7,
      heading: "Admin",
      title: "सिक्यारा टनल हादसे पर लिखी पुस्तक 'वो 17 दिन' का उत्तराखंड के सीएम ने किया विमोचन",
      Date: 'March 04, 2025',
      Icon: Avtarim,
      fullNews: News7,
    },
    {
      id: 9,
      img: headline8,
      heading: "Admin",
      title: "'मोदी की विदेश नीति' और 'महिला सशक्तिकरण' पुस्तक का लोकार्पण",
      Date: 'March 04, 2025',
      Icon: Avtarim,
      fullNews: News8,
    }, 
    {
      id: 11,
      img: headline10,
      heading: "Admin",
      title: "'मोदी की विदेश नीति' और 'महिला सशक्तिकरण' पुस्तक का लोकार्पण",
      Date: 'March 04, 2025',
      Icon: Avtarim,
      fullNews: News10,
    }, 
  ]
  return (
    <>
         {/* Headline Images */}
         <div className='container'>
        <div className='row'> {/* Row should contain all columns */}
          {newsHeadline.map((i, index) => (
            <div key={index} className='col-md-3 pb-4'> {/* Each item takes 3/12 columns */}
              <div className='card'>
                <img className='w-100' src={i.img} alt={i.id} />
                <h6 className='text-center pt-2 fw-bold'>{i.title}</h6>
                <Card.Body className='m-0 pb-3 pt-0 px-2'>
                  <Card.Link><p onClick={() => handleImageClick(i.fullNews)} className='smaller text-white mb-0'>View News
                    <img src={Arrows} alt="1" className='pain' style={{ width: "20px", paddingLeft: "5px" }} /></p>
                    <p> Date - {i.Date}</p>
                  </Card.Link>
                 
                </Card.Body>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className='container'>
        <div className="row">
          {/* Use map to dynamically create product cards */}
          {cardsData.map((card) => (
            <NewsList
              key={card.id}
              imageSrc={card.imageSrc}
              heading={card.heading}
              text={card.text}
              titles={card.titles}
              url={card.url}
              Date={card.Date}
              Icon={card.Icon}
              Arrow={card.Arrow}
            />

          ))}
        </div>
      </div>


 

      {/*  */}
      {/* Modal for Full Image View */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className='text-center'>
          <img src={selectedImage} alt="Full Size" className='w-100' />
        </Modal.Body>
      </Modal>


    </>

  )
}