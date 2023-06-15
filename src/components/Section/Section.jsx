import { useTheme } from '@mui/system';
import PropTypes from 'prop-types';
import { SectionBox, Title, TitleBox } from './Section.styled';

export function Section({ title, children }) {
  const theme = useTheme();
  return (
    <SectionBox theme={theme}>
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
      {children}
    </SectionBox>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
