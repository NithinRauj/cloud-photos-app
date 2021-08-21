import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import Button from './Button';
import ProgressBar from './ProgressBar';
import Input from './Input';
import { useAppState } from '../contexts/AppContext';

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:rgba(0,0,0,0.9);
    position: fixed;
    z-index: 10;
`;

const Root = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    min-width: 400px;
    min-height: 300px;
    border-radius: 25px;
    background-color: ${props => props.theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0px 30px;
    text-align: center;
`;

const Modal = () => {

    const { modalProps } = useAppState();
    const { isVisible, text, buttonText, onButtonClick, progressNumber, showProgressBar = false, showTitleField = false } = modalProps;
    return (
        <>
            {isVisible &&
                <Overlay>
                    <Root>
                        <Text size={'base'}>{text}</Text>
                        {showProgressBar && <ProgressBar progressNumber={progressNumber} />}
                        {showTitleField && <Input type='text' name='title' placeholder='Enter album name' />}
                        <Button width={'150px'} height={'40px'} text={buttonText} bgColor={'darkAccent'} onClick={onButtonClick} />
                    </Root>
                </Overlay>
            }
        </>
    )
}

export default Modal

