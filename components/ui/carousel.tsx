"use client"

import { Carousel } from '@mantine/carousel';

export function ImageCarousel() {
  return (
    <div className="">  
    <Carousel slideSize="100%" height={500} align="center" slideGap="xs" controlsOffset="xl" controlSize={30} loop dragFree>
      <Carousel.Slide size={400}>  
      <img className='border rounded-lg' src="https://cdn.sanity.io/images/m8ei9ib0/production/ab4ab219aed08c966943581a6eba72d83c823aa8-680x850.jpg?w=2000&fit=max&auto=format" alt="" />
      </Carousel.Slide>
      <Carousel.Slide size={400}>  
      <img className='border rounded-lg' src="https://cdn.sanity.io/images/m8ei9ib0/production/5a073e0baef2c640b6bc8a77f837e034f1eb9059-680x850.jpg?w=2000&fit=max&auto=format" alt="" />
      </Carousel.Slide>
      <Carousel.Slide size={400}>  
      <img className='border rounded-lg' src="https://cdn.sanity.io/images/m8ei9ib0/production/b27e36756e9ae90c5ebc303ed12741d002fea7a4-680x850.jpg?w=2000&fit=max&auto=format" alt="" />
      </Carousel.Slide>
      <Carousel.Slide size={400}>  
      <img className='border rounded-lg' src="https://cdn.sanity.io/images/m8ei9ib0/production/4f86ba8ba779776820152ab5b2049ca47d8f7b21-680x850.jpg?w=2000&fit=max&auto=format" alt="" />
      </Carousel.Slide>
      <Carousel.Slide size={400}>  
      <img className='border rounded-lg' src="https://cdn.sanity.io/images/m8ei9ib0/production/c7e64679edcdcc21b2a57cdef75792714ae94b59-680x850.jpg?w=2000&fit=max&auto=format" alt="" />
      </Carousel.Slide>
    </Carousel>
    </div>
  );
}