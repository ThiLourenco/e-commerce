'use client'

import { useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import { createStyles, getStylesRef } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
// import Image from 'next/image'

export function ImageCarousel() {
  const autoplay = useRef(Autoplay({ delay: 2000 }))

  const useStyles = createStyles(() => ({
    controls: {
      ref: getStylesRef('controls'),
      transition: 'opacity 150ms ease',
      opacity: 0,
    },

    root: {
      '&:hover': {
        [`& .${getStylesRef('controls')}`]: {
          opacity: 1,
        },
      },
    },
  }))

  const { classes } = useStyles()
  return (
    <div>
      <Carousel
        classNames={classes}
        slideSize="40rem"
        height={500}
        align="center"
        slideGap="xs"
        controlsOffset="xl"
        controlSize={30}
        loop
        dragFree
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide size={400}>
          <Image
            className="rounded-lg border"
            src="https://cdn.sanity.io/images/d2tfklso/production/fea423637e177f2e7e5b1d49ddf650fe3d4f5b2f-680x850.jpg"
            alt="Camisa Lisa Preto"
            width={650}
            height={500}
          />
        </Carousel.Slide>
        <Carousel.Slide size={400}>
          <Image
            className="rounded-lg border"
            src="https://cdn.sanity.io/images/d2tfklso/production/88b9639b32832d4d354a9067826ca08456ba0141-680x850.jpg"
            alt="Óculos Preto"
            width={650}
            height={500}
          />
        </Carousel.Slide>
        <Carousel.Slide size={400}>
          <Image
            className="rounded-lg border"
            src="https://cdn.sanity.io/images/d2tfklso/production/bad94890f08054de77c5cd581135ed6fce2f1eb3-680x850.jpg"
            alt="Touca Preta"
            width={650}
            height={500}
          />
        </Carousel.Slide>
        <Carousel.Slide size={400}>
          <Image
            className="rounded-lg border"
            src="https://cdn.sanity.io/images/d2tfklso/production/92184a08c716f94e2ec31e0daf53302f539833f0-680x850.jpg"
            alt="Camisa Street Preto"
            width={650}
            height={500}
          />
        </Carousel.Slide>
        <Carousel.Slide size={400}>
          <Image
            className="rounded-lg border"
            src="https://cdn.sanity.io/images/d2tfklso/production/b4ea362838dae50ed618f9b25209f47fe186c6e1-680x850.jpg"
            alt="Bolsa Channel Preto"
            width={650}
            height={500}
          />
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
