// import { useTheme } from '@mui/system';
import PropTypes from 'prop-types';
import { SectionBox, Title, TitleBox } from './Section.styled';
import { FC, ReactNode } from 'react';
import { useTheme } from '@mui/material';

interface IProps {
  title: string;
  children: ReactNode;
}

export const Section: FC<IProps> = ({ title, children }) => {
  const theme = useTheme();
  return (
    <SectionBox theme={theme}>
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
