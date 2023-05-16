import { Box, Container, Typography } from '../components/Mui/material';

export default function RootPage() {
  return (
    <Container maxWidth='xl' sx={{ marginLeft: '30rem' }}>
      <Typography variant='h1' justifyContent='center' alignItems='center'>
        Please Select Course
      </Typography>
    </Container>
  );
}
