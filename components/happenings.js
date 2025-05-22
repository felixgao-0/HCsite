import { Box, Text, Grid, Input, Button } from 'theme-ui'

const Happenings = () => {
  return (
    <Box
      sx={{
        py: "4",
        position: 'relative',
        width: '90vw',
        maxWidth: 'layout',
        mx: 'auto'
      }}
    >
      <Grid
        columns={[1, 2]}
      >
        <Box as="form">
          <Text
            variant="title"
            as="h1"
            sx={{ fontSize: ['36px', '48px', '56px'], mb: 4 }}
            color="white"
          >
            Learn more about Hack Club!
          </Text>
          <Text
            variant="lead"
            color="white"
          >
            Through our bi-weekly newsletter, you can stay up to date with the latest happenings in the Hack Club community.
          </Text>
          <Input 
            placeholder="orpheus@hackclub.com"
          />
          <Button type="submit" sx={{ mt: 2, fontSize: 2 }}>Sign up!</Button>
        </Box>
        <Box
          sx={{
            width: ['100%', '300px'],
            height: ['200px', '300px'],
            bg: 'muted',
            borderRadius: '12px',
            ml: [0, 4],
            mt: [4, 0],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <img
            src="https://via.placeholder.com/300x300?text=Hack+Club"
            alt="Placeholder"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default Happenings