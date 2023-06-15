import { Container } from '@mui/system';
import { Section } from 'components/Section/Section';

import {
  AnimationBox,
  HomeLabel,
  HomeText,
  HomeTitle,
  Rectangle,
  RectangleMob,
  TextBox,
} from './HomePage.styled';
import rectangle from 'images/rectangle.png';
import rectangleMobile from 'images/rectangle-mobile.png';
import { useTheme } from '@emotion/react';
import { BookAnimation } from 'animation/BookAnimation';

export function Homepage() {
  const theme = useTheme();

  return (
    <Section title="Home page">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px',
        }}
      >
        <TextBox>
          <HomeTitle theme={theme}>Phonebook</HomeTitle>
          <HomeLabel theme={theme}>...connecting people</HomeLabel>
          <HomeText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            itaque cupiditate adipisci delectus labore in obcaecati,
            exercitationem
          </HomeText>
        </TextBox>
        <AnimationBox>
          <BookAnimation />
          <Rectangle src={`${rectangle}`} alt="rectangle" width={500} />
          <RectangleMob
            src={`${rectangleMobile}`}
            alt="rectangle"
            width={400}
          />
        </AnimationBox>
      </Container>
    </Section>
  );
}
