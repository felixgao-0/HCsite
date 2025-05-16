import React, { useState } from 'react'
import { Box, Heading, Text, Button, Flex } from 'theme-ui'
import Icon from '@hackclub/icons'

import BGImg from '../components/background-image'

/* 
Hai, welcome to Felix's jank code! Documention:
- image: the image
- alt: image alt text
- cta: call to action, "image a place where... XYZ"
- actionButtonText: the button text
- actionLink: the link to the button
- link: caption link
- caption: caption text

You just need to add a new object to the array and you're good to go!
*/
const itemsCarousel = [
  {
    image: '/hackathons/assemble.JPG',
    alt: 'Assemble',
    cta: 'where you go on IRL adventures with other teenage hackers',
    actionButtonText: 'Join the Slack',
    actionLink: '/slack',
    link: 'https://example.com',
    caption: 'Hackers at Assemble',
  },
  {
    image: '/hackathons/mahacks.jpeg',
    alt: 'Mahacks',
    cta: 'where you can meet teenagers like you',
    actionButtonText: 'Join the Slack',
    actionLink: '/slack',
    link: 'https://example.com/hello2',
    caption: 'Hackers at Mahacks',
  },
]

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)
  const prev = () => setIndex(i => (i === 0 ? itemsCarousel.length - 1 : i - 1))
  const next = () => setIndex(i => (i === itemsCarousel.length - 1 ? 0 : i + 1))


  const handleChange = dir => {
    setFade(false)
    setTimeout(() => {
      setIndex(i =>
        dir === 'next'
          ? (i === itemsCarousel.length - 1 ? 0 : i + 1)
          : (i === 0 ? itemsCarousel.length - 1 : i - 1)
      )
      setFade(true)
    }, 1200) // match fade duration
  }


  return (
    <>
      <BGImg
        src={ itemsCarousel[index].image }
        alt={ itemsCarousel[index].alt }
        width="100%"
        height="100%"
        priority
        gradient="linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45))"
      />
    <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
      <Button 
        onClick={() => handleChange('prev')} 
        variant="primary"
        sx={{ flexShrink: 0, flexGrow: 0, ml: 3 , background: 'blue'}}
      >
        <Icon glyph="view-back" size={30}/>
      </Button>
      <Box
        sx={{
          width: '90vw',
          maxWidth: [null, 'layout'],
          position: 'relative',
          mx: 'auto',
          py: [4, 4, 4],
          textShadow: 'text',
          textAlign: 'center',
          opacity: fade ? 1 : 0,
          transition: 'opacity 1s'
        }}
      >
        <Text
          variant="eyebrow"
          sx={{
            color: 'sunken',
            pb: 2,
            position: 'relative',
            display: 'block',
          }}
          as="h4"
        >
          Imagine a World...
        </Text>
        <Heading>
          <Text
            as="p"
            variant="title"
            sx={{
              color: 'white',
              mb: [3, 4],
              zIndex: 1,
              fontSize: ['32px', '42px', '52px'],
              lineHeight: 1.2,
              width: '100%',
            }}
          >
            { itemsCarousel[index].cta }
          </Text>
          <Button
            variant="ctaLg"
            as="a"
            href={ itemsCarousel[index].actionLink }
            mt={[3, 0, 0]}
            mr={3}
            sx={{ transformOrigin: 'center' }}
          >
            { itemsCarousel[index].actionButtonText }
          </Button>
        </Heading>
      </Box>
      <Button 
        onClick={() => handleChange('next')} 
        variant="primary"
        sx={{ flexShrink: 0, flexGrow: 0, mr: 3 , background: 'blue'}}
      >
        <Icon glyph="view-forward" size={30}/>
      </Button>
    </Flex>
    </>
  )
}

export default Carousel