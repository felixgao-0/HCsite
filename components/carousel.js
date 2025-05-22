import React, { useEffect, useState, useRef } from 'react'
import { Box, Heading, Text, Button, Badge, Flex, Grid } from 'theme-ui'
import Icon from '@hackclub/icons'

import BGImg from '../components/background-image'

/* 
Hai, welcome to Felix's jank code! Documention:
- image: the image
- cta: call to action, "image a place where... XYZ"
- actionButtonText: the button text, "Join the Slack" (all caps anyway)
- actionLink: the link to the button, "hackclub.com/slack"
- link: caption link (the clickable bit on the gray pill), "assemble.hackclub.com"
- caption: caption text (the one in the gray pill), "Assemble!"
- captionTitle: the caption hover text (usually image credits), "by John Doe"

Footnote: images should be decorative, so an alt is not needed
You just need to add a new object to the array and you're good to go!
*/
const itemsCarousel = [
  {
    image: '/hackathons/assemble.JPG',
    cta: 'where you go on IRL adventures with other teen hackers',
    actionButtonText: 'Join the Slack',
    actionLink: '/slack',
    link: 'https://example.com',
    caption: 'Hackers at Assemble',
    captionTitle: 'Designed by Felix Gao, Jank!',
  },
  {
    image: '/hackathons/mahacks.jpeg',
    cta: 'with an amazing online community of hackers',
    actionButtonText: 'Join the Slack',
    actionLink: '/slack',
    link: 'https://example.com/hello2',
    caption: 'Hackers at Mahacks',
    captionTitle: 'Taken by Jank LLC',
  },
  {
    image: '/jobs/hack-penn.jpg',
    cta: 'where you create projects you love',
    actionButtonText: 'explore projects',
    actionLink: '/slack',
    link: 'https://example.com/hello2',
    caption: 'Hackers at Mahacks',
    captionTitle: 'Taken by Jank LLC',
  },
]

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)
  const slideTimer = useRef(null)

  useEffect(() => { // fade on load
    const timeout = setTimeout(() => setFade(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const changeSlide = setInterval(() => {
      handleChange('next')
    }, 5000)

    return () => clearInterval(changeSlide); 
  }, [])

  const handleChange = dir => {
    setFade(false)
    setTimeout(() => {
      setIndex(i =>
        dir === 'next'
          ? (i === itemsCarousel.length - 1 ? 0 : i + 1)
          : (i === 0 ? itemsCarousel.length - 1 : i - 1)
      )
      setFade(true)
    }, 1000) // match fade duration
  }


  return (
    <Box
      as="header"
      sx={{
        bg: 'dark',
        pt: [5, 6],
        pb: [2, 3],
        textAlign: 'left',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
        <BGImg
          src={ itemsCarousel[index].image }
          alt="" // decorative, no alt needed
          width="100%"
          height="80vh"
          priority
          gradient="linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45))"
          sx={{
            objectFit: 'cover',
            display: 'block'
          }} />
    <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
      <Button 
        onClick={() => handleChange('prev')} 
        variant="primary"
        sx={{ flexShrink: 0, flexGrow: 0, ml: 3 , background: 'blue', aspectRatio: '1/1'}}
      >
        <Icon glyph="view-back" size={35} style={{ margin: 0 }} />
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
          transition: 'opacity 0.75s ease-in-out'
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
        sx={{ flexShrink: 0, flexGrow: 0, mr: 3 , background: 'blue', aspectRatio: '1/1' }}
      >
        <Icon glyph="view-forward" size={35} style={{ margin: 0 }} />
      </Button>
    </Flex>
    <Grid columns={3}>
      <Box /> {/* centering box :) */}
      <Flex sx={{ flexDirection: 'row', justifyContent: 'center' }} >
        <Flex sx={{ justifyContent: 'center', alignItems: 'center', mt: 3, gap: 2 }}>
  {itemsCarousel.map((item, i) => (
    <Button
      key={i}
      variant="circle"
      aria-label={`Go to slide ${i + 1}`}
      onClick={() => {
        setFade(false)
        setTimeout(() => {
          setIndex(i)
          setFade(true)
        }, 1000)
      }}
      sx={{
        width: 16,
        height: 16,
        p: 0,
        m: 0.5,
        borderRadius: '50%',
        background: i === index ? 'blue' : 'cyan',
        border: 'none',
        boxShadow: 'none',
        transition: 'background 0.2s',
        cursor: 'pointer',
        display: 'inline-block',
        lineHeight: 1,
      }}
    >
    </Button>
  ))}
</Flex>
      </Flex>
      <Flex sx={{ 
        justifyContent: 'flex-end',
      }}>
        <Badge
          as="a"
          href={ itemsCarousel[index].link }
          target="_blank"
          rel="noopener"
          variant="pill"
          title= { itemsCarousel[index].captionTitle }
          sx={{
            bg: 'black',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'normal',
            width: 'auto',
            height: 'auto',
            mr: 3,
            display: 'inline-flex',
            alignItems: 'center',
            alignSelf: 'end'
          }}>{ itemsCarousel[index].caption }
        </Badge>
      </Flex>
    </Grid>
    </Box>
  )
}

export default Carousel