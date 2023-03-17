import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCheckSquare,  } from "@fortawesome/free-solid-svg-icons";


const Content = () => {
  return (
    <div className='main-container'>

<div className="firstHalf">
    <img className='full-width' src="https://thumbs.dreamstime.com/b/high-school-building-26880366.jpg" alt="school" />
</div>


<div className="secondHalf">
    <div className="leftNav-icon">
        <FontAwesomeIcon icon={faPenToSquare} fontSize='4rem'></FontAwesomeIcon>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit facilis perferendis tenetur dolores.  </p>
    </div>
    <div className="rightNav-icon">
        <FontAwesomeIcon icon={faCheckSquare} fontSize='4rem'></FontAwesomeIcon>
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit facilis perferendis tenetur dolores. </p>
    </div>
</div>
<section className="section">
    <div className="thirdHalf">
        <h2 className='center'>Gallery</h2>
        <div className="images">
            <img src="https://www.collinsdictionary.com/images/full/school_309241295.jpg" width='300px' alt="classroom" />
            <img src="https://www.ctvnews.ca/polopoly_fs/1.4270510.1570292473!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg" width='300px' alt="classroom" />
            <img src="https://www.schooleducationgateway.eu/files/png6/inclusion_new1.png" width='300px' alt="classroom" />
        </div>
    </div>
</section>
</div>
    )
}

export default Content