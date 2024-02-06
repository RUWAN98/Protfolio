import React, { useRef } from 'react'
import "./WorkExperience.css"
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick';
import { WORK_EXPERIENCE } from '../../utils/data';

const WorkExperience = () => {
    const sliderRef = useRef();


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToshow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToshow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }



    return (
        <section className='experience-container'>
            <h5> Work Experience</h5>
            <div className='experience-conent'>
                <div className='arrow-right' onClick={slideRight}>
                    <span class="meterial-symbols-outlined">chevron_right</span>
                </div>
                <div className='arrow-left' onClick={slideLeft}>
                    <span class="material-symbols-outlined">chevon_left</span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperience