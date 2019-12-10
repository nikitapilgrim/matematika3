import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    width: 4rem;
    height: 4rem;
    color: #fff;
    background-color: #f70400;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.5rem;    
`;


export const  DraggableElem = ({ item, index }) => {
    return (
        <Draggable draggableId={item.id + ''} index={index}>
            {provided => (
                <Wrapper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {item.value || item.placeholder}
                </Wrapper>
            )}
        </Draggable>
    );
}
