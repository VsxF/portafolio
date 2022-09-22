import styled, { css, keyframes } from 'styled-components';
import Sun from '../general/icons/headerIcons/sun.svg';
import Moon from '../general/icons/headerIcons/moon.svg';
import Clouds from '../general/icons/headerIcons/clouds.svg';
import Stars from '../general/icons/headerIcons/stars.svg';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(95% - 10px);
  height: 95px;
  align-items: center;
  z-index: 10;
`

export const Item = styled.div<{ width?: string }>`
    width: ${({ width }) => width};
    margin: 10px;
    display: flex;
    flex-align: row;
    width: 80px;
    height: 35px;

`

export const Switch = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  cursor: pointer;
  width: 100%;
`

const slideBack = css`
  background-repeat: no-repeat; 
  background-position: 50% 100%;
  background-size: contain;
`

export const Slide = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 35px;
  border-radius: 20px;
  background: red;
  // border: solid 2px red;
  cursor: pointer;
  background: url(${Stars});
  ${slideBack} 
  background-color: #0E0A14;
  background-position: 44px center;
  background-size: auto;
  transition: background 0s linear;
 

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transition: 0.3s;
    color: yellow;
    background: url(${Moon});
    ${slideBack};
  }
`

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 20px;
  width: 80px;
  height: 35px;
  cursor: pointer;
  &:checked + ${Slide} {
    background: url(${Clouds});
    ${slideBack};
    background-color: #87ceeb;
    background-position: left 3px;

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      margin-left: 42px;
      transition: 0.3s;
      background: url(${Sun});
      ${slideBack};
    }
  }
`



