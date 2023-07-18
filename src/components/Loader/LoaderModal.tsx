import ReactDOM from 'react-dom';
import { FC, ReactNode } from 'react';
import { Backdrop } from './LoaderModal.styled';

interface IProps {
  children: ReactNode;
}

export const LoaderModal: FC<IProps> = ({ children }) => {
  return ReactDOM.createPortal(
    <Backdrop>{children}</Backdrop>,
    document.getElementById('modal-root') as HTMLDivElement
  );
};
