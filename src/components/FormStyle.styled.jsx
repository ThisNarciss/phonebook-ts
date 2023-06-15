import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

import bgImgHomePage from 'images/bg-02.webp';

export const UserForm = styled(Form)`
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px;
  background: transparent;

  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
    0 2px 2px rgba(0, 0, 0, 0.12);
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  color: #c6c6c6;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: all 300ms ease;
`;

export const FormInput = styled(Field)`
  background: none;
  color: #fff68f;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 3px solid #c6c6c6;
  :focus {
    outline: none;
  }
  :focus ~ label,
  :valid ~ label {
    top: -14px;
    font-size: 12px;
    color: #fff68f;
  }
  :focus ~ span:before {
    width: 100%;
  }
`;

// Registration and Login Form

export const FormRegLog = styled(Form)`
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px;
  background: #9152f8;
  background-image: url(${bgImgHomePage});
  margin: 0 auto;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
    0 2px 2px rgba(0, 0, 0, 0.12);
`;

export const InputLabelBox = styled.div`
  position: relative;
  margin-bottom: 35px;
`;

export const LabelRegLog = styled.label`
  color: #c6c6c6;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: all 300ms ease;
`;

export const InputRegLog = styled(Field)`
  background: none;
  color: #fff68f;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 3px solid #c6c6c6;
  :focus {
    outline: none;
  }
  :focus ~ label,
  :valid ~ label {
    top: -14px;
    font-size: 12px;
    color: #fff68f;
  }
  :focus ~ span:before {
    width: 100%;
  }
`;
export const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  &:before {
    content: '';
    height: 3px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: #fff68f;
    transition: 300ms ease all;
    left: 0%;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;
export const Error = styled(ErrorMessage)`
  font-size: 10px;
  color: red;
`;
