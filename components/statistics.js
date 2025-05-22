import { Box, Text, Flex } from 'theme-ui'

const values = [
  {
    "title": "Projects Built",
    "value": "123,456",
  },
  {
    "title": "Hackers",
    "value": "75,000",
  },
  {
    "title": "Hackathons",
    "value": "100",
  },
  {
    "title": "Global Clubs",
    "value": "567",
  },
  {
    "title": "Awesomeness",
    "value": "100%",
  }, 
]

const Statistics = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '90vw',
        maxWidth: 'layout',
        margin: 'auto'
      }}
    >
      <Text
          variant="title"
          as="h1"
          sx={{ fontSize: ['36px', '48px', '56px'], mb: 4 }}
        >You could be a
        <Text
          as="span"
          sx={{
            borderRadius: 'default',
            px: 1,
            mx: 0,
            whiteSpace: ['wrap', 'nowrap', 'nowrap'],
            color: 'white',
            background: theme => theme.util.gx('cyan', 'purple'),
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        > great statistic</Text>
        </Text>
                
      <Flex alignItems="center" sx={{ gap: 4, justifyContent: 'space-between' }}>
        {values.map((stat, i) => (
          <Flex
            key={i}
            alignItems="center"
            sx={{ flexDirection: "column", alignItems: "center" }}
          >
            <Text variant="headline" sx={{ my: [0, 0, 0] }}>
              {stat.value}
            </Text>
            <Text variant="lead" sx={{ my: [0, 0, 0] }}>
              {stat.title}
            </Text>
          </Flex>
        ))}
        </Flex>
    </Box>
  )
}

export default Statistics