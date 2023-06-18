import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  ContainerBtn,
  ContainerItem,
  Item,
  ItemLetter,
  Letter,
} from './ContactItem.styled';
import { BiUser } from 'react-icons/bi';
import { deleteContact } from '../../redux/contacts/operations';
import { LoaderBtn } from '../Loader/Loader';
import { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { UpdateModalForm } from '../UpdateModalForm/UpdateModalForm';
import { TelLink, Text } from './ContactItem.material';
// import { useTheme } from '@emotion/react';
import { AppDispatch } from '../../redux/store';
import { useTheme } from '@mui/material';

interface IProps {
  bool: boolean;
  id: string;
  name: string;
  number: string;
}

export const ContactItem: FC<IProps> = ({ bool, id, name, number }) => {
  const theme = useTheme();
  const [deleteBtnId, setDeleteBtnId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const onBtnDeleteClick = (id: string) => {
    setDeleteBtnId(id);
    setIsDeleting(true);
    dispatch(deleteContact(id))
      .unwrap()
      .finally(() => setIsDeleting(false));
  };

  return (
    <>
      {bool && (
        <ItemLetter>
          <Letter>{name.slice(0, 1)}</Letter>
        </ItemLetter>
      )}
      <Item theme={theme}>
        <ContainerItem>
          <BiUser
            style={{
              fontSize: 'inherit',
              transition: ' color 250ms linear',
              color: theme.palette.mode === 'dark' ? 'white' : 'black',
            }}
          />
          <Text sx={{ fontSize: { xs: '10px', sm: '12px', md: '14px' } }}>
            {name}:
          </Text>
          <TelLink
            sx={{ fontSize: { xs: '10px', sm: '12px', md: '14px' } }}
            href={`tel:${number}`}
          >
            {number}
          </TelLink>
          <ContainerBtn>
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => {
                onBtnDeleteClick(id);
              }}
              disabled={isDeleting}
              sx={{
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                ':hover': { color: 'white', backgroundColor: 'red' },
                ':focus': { color: 'white', backgroundColor: 'red' },
                transitionProperty: 'all',
                transitionDuration: '250ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              }}
            >
              {!isDeleting && <DeleteIcon fontSize="inherit" />}
              {isDeleting && deleteBtnId === id && <LoaderBtn />}
            </IconButton>
            <UpdateModalForm id={id} name={name} number={number} />
          </ContainerBtn>
        </ContainerItem>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
