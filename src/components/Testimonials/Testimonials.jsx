// import css
import './Testimonials.css';
// import functions
import React from 'react';
// import assets
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Quasi voluptatum, fuga est aperiam dignissimos reprehenderit illum nam iste ut asperiores esse nobis hic autem delectus dolorum accusantium, architecto voluptates quos aliquam ratione! Quae numquam quasi alias dolorem autem, rem sequi similique?'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Et tenetur corrupti doloremque? Rem harum consequuntur quo sunt odio nesciunt nihil impedit dolores placeat. Perferendis ab reprehenderit repudiandae fugit dicta ullam architecto vitae dolores, rem eos accusamus a, cum cupiditate laboriosam minus nihil voluptatum.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Reprehenderit beatae cum quod nesciunt earum placeat doloribus neque. Esse vero ducimus a optio. Ad illo distinctio animi facere deleniti provident quod? Natus architecto tempore fugiat dolorum aliquid quis similique ad, ut, temporibus voluptate repellat voluptatum!'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Facere, eos molestias a officia quo perspiciatis vitae suscipit sapiente minus nesciunt nihil hic aspernatur veritatis voluptatibus quos at ullam. Officia, voluptates at excepturi fugit dolor velit? Omnis sit exercitationem nesciunt quo obcaecati.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials