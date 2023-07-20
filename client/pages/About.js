import React, { useState } from 'react'
import "animate.css"
const About = () => {

    const [isElementVisible, setIsElementVisible] = useState(false);


    const handleButtonClick = () => {
        setIsElementVisible(!isElementVisible);
      };
  return (
    <div className='container-fluid'>
    <div className='container w-75 mx-auto my-5 min-vh-100'>
        <h2 className='text-bg-light animate__animated animate__fadeInDown' style={{fontFamily:'Kolketif',fontWeight:'bold'}}>About us</h2>
     
       <p style={{textAlign:'justify'}}>
       A smart city project is an innovative and transformative initiative aimed at leveraging technology, data, and sustainable practices to enhance the quality of life for residents and promote sustainable urban development. It involves integrating various elements of urban life, such as transportation, energy, infrastructure, governance, and public services, into a cohesive and intelligent ecosystem.
      <br></br>
      Our mission is to create a connected, sustainable, and inclusive urban environment that enhances the quality of life for all residents, fosters economic growth, and preserves our natural resources for future generations.
       </p>
       <div id="carouselExampleIndicators" className="carousel slide my-5 w-50 m-auto" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/waste.jpg" className="d-block w-100 rounded-5" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/roads.jpeg" className="d-block w-100 rounded-5" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/sewage.jpeg" className="d-block w-100 rounded-5" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h3 className='text-bg-light animate__animated animate__fadeInDown' style={{fontFamily:'Kolketif',fontWeight:'bold',fontSize:'24px'}}>Objectives</h3>
<p style={{textAlign:'justify'}}>
Digital Connectivity: Establish a robust and reliable digital infrastructure that enables seamless connectivity and communication between residents, businesses, government entities, and city services.
<br></br>
<br></br>
Sustainable Infrastructure: Implement sustainable infrastructure solutions such as smart energy grids, efficient waste management systems, and intelligent transportation networks to reduce resource consumption, minimize carbon footprint, and promote environmental sustainability.
<br></br>
<br></br>
Inclusive Access: Ensure equitable access to digital technologies and services for all residents, regardless of their socioeconomic status, age, or abilities. Bridge the digital divide by providing affordable internet access, digital literacy programs, and inclusive design principles.
<br></br>
<br></br>
Enhanced Quality of Life: Improve the overall quality of life for residents by enhancing public safety through smart surveillance and emergency response systems, optimizing transportation networks to reduce congestion and commute times, and creating smart public spaces that promote social interaction and well-being.
<br></br>
<br></br>
Economic Innovation: Foster innovation and economic growth by attracting technology companies, startups, and entrepreneurs to the city. Support a thriving ecosystem of innovation through incubators, accelerators, and collaboration spaces, while promoting digital entrepreneurship and skills development.
<br></br>
<br></br>
Data-Driven Decision Making: Establish a data-driven approach to urban planning and governance by leveraging advanced analytics, artificial intelligence, and Internet of Things (IoT) technologies. Utilize data insights to make informed decisions, optimize city operations, and improve service delivery.
<br></br>
<br></br>
Citizen Engagement and Co-Creation: Encourage active citizen participation by providing platforms for feedback, collaboration, and co-creation. Involve residents in decision-making processes, solicit their input on urban projects, and empower them to contribute to the development and well-being of their communities.
<br></br>
<br></br>
Resilience and Disaster Preparedness: Enhance the city's resilience to natural disasters, climate change, and other potential risks by integrating smart technologies for early warning systems, disaster response coordination, and infrastructure resiliency measures.
<br></br>
<br></br>

Smart Governance and Efficiency: Streamline and digitize government processes to improve efficiency, transparency, and accountability. Implement e-governance solutions for citizen services, digital documentation, and participatory budgeting.
<br></br>
<br></br>

Knowledge Sharing and Collaboration: Foster knowledge sharing and collaboration among stakeholders, including academia, industry, government, and citizens, to create an ecosystem of innovation, research, and best practices in smart city development.
       </p>
   
 <button className='btn btn-info w-25' onClick={handleButtonClick}>Read more</button>
{isElementVisible && <div>
 <p style={{textAlign:'justify'}} className='animate__animated animate__fadeInDown' >
 The smart city initiative brings numerous benefits and advantages to the community, residents, and businesses. Emphasizing these advantages helps generate awareness and support for the project. Here are some key benefits to highlight:
 <br></br>
 <br></br>

Improved Quality of Life: The smart city initiative enhances the overall quality of life for residents. It provides advanced infrastructure and services that improve safety, transportation, healthcare, education, and access to public amenities. Residents enjoy a more convenient, efficient, and enjoyable living environment.
<br></br>
<br></br>

Sustainable and Green Living: The smart city promotes sustainability and environmental stewardship. Through efficient use of resources, renewable energy solutions, waste management systems, and green spaces, the initiative reduces the carbon footprint, preserves natural resources, and creates a healthier and cleaner living environment for residents.
<br></br>
<br></br>

Enhanced Safety and Security: Smart city technologies enable advanced security systems, surveillance, and emergency response mechanisms. Residents benefit from improved safety measures, reduced crime rates, and faster emergency services, contributing to a safer and more secure community.
</p>
</div>}

    </div>
    </div>

  )
}

export default About
