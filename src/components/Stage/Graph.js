import React, {useState} from "react";
import styled from "styled-components";
import {usePlaceholder} from "../../hooks/usePlaceholder";
import {Simple} from "./Simple";
import {useMount} from "react-use";

const Wrapper = styled.div`
  transform: rotate(180deg) translateZ(0);
  outline: 1px solid transparent;
-webkit-backface-visibility: hidden;
will-change: transform;
-webkit-perspective: 1000;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
  position: relative;
  padding: 1em 0; 
  white-space: nowrap;
  margin: 0 auto;
  text-align: center;
  
  li {
    position: relative;
    display: flex;
    ul {
      &:not(:first-child) {
          margin-left: 4rem;
        }
    }
  }
  
  /*&.level_1 {
    & > li {
      &:before {
        content: '';
        position: absolute;
        border: 1px solid black;
        height: 3rem;
        left: 49%;
        top: 0%;
      }
    }
  }*/
`;

const Li = styled.li`
  display: inline-block; // need white-space fix
  vertical-align: top;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 1em .5em 0 .5em;
  /*ul {
    &:nth-child(2) {
      div {
        &:before {
          display: none;
        }
      }
    }
    &:nth-child(1) {
      div {
        &:after {
          display: none;
        }
      }
    }
  }*/
`;

const Elem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    transform: rotate(180deg);
    border: 1px solid black;
    background: ${props => props.disabled ? 'white' : '#fff8b0'};
    ${props => props.round && 'border-radius: 50% 50%'};
    ${props => {
        if (props.level === 0 ) return false;
       if (props.lines === 3) {
           return `
                &:before {
                    content: '';
                    position: absolute;
                    border: 1px solid black;
                    height: 2rem;
                    left: 49%;
                    top: 102%;
                    z-index: -5;
                }
           `
       }
       if (props.lines === 0) {
           return `
                &:after {
                    content: '';
                    position: absolute;
                    border: 1px solid black;
                    height: 2.5rem;
                    z-index: -5;
                     left: -22%;
                    top: 96%;
                    transform: rotate(38deg);
                }
           `
       }
    if (props.lines === 1) {
        return `
                &:after {
                    content: '';
                    position: absolute;
                    border: 1px solid black;
                    height: 2.5rem;
                    z-index: -5;
                    left: 119%;
                    top: 96%;
                    transform: rotate(-38deg);
                }
                /*&:before, &:after {
                    content: '';
                    position: absolute;
                    border: 1px solid black;
                    height: 2.5rem;
                    z-index: -5;
                }
                &:before {
                    left: -22%;
                    top: 96%;
                    transform: rotate(38deg);
                }
                &:after {
                    left: 119%;
                    top: 96%;
                    transform: rotate(-38deg);
                }*/
           `
    }
}};
`;


const Level = ({onInit, handler, data, level=0, lines=[0, 0]}) => {
    const {placeholder, text} = usePlaceholder(data.elem);
    const hasChildren = (data) => Boolean(data.children);
    const regexp = /^[0-9]*$/gm;
    const round = !new RegExp(regexp).test(text);

    useMount(() => {
        if (!placeholder) onInit('level_' + level)(text);
    });

    return (
        <Ul className={'level_' + level}>
            <Elem level={level} lines={lines[1]} disabled={placeholder} round={round}>
                <Simple handlerInput={handler('level_' + level)(text)}
                        theme={'table'}
                        disabled={placeholder}
                        placeholder={placeholder}
                        answer={text}/>
            </Elem>
            {hasChildren(data) && <Li>
                {data.children.map(((elem, i) => {
                    return (<Level onInit={onInit} handler={handler} lines={[data.children.length, data.children.length === 1 ? 3 : i]} level={level + 1} key={elem.elem} data={elem}/>)
                    }))}
            </Li>}
        </Ul>
    )
};

export const Graph = React.memo(function Graph({data}) {
    const [inputs, setInputs] = useState({});
    console.log(inputs)
    const handlerInput = (level) => answer => (value) => {
        if (value === answer) {
            setInputs({...inputs, ...{[level]: true}})
        } else {
            setInputs({...inputs, ...{[level]: false}})
        }
    };

    const handlerInit = (level) => (answer) => {
        setInputs(prev => {
            return {...prev, ...{[level]: false}}
        })
    };

    return (
        <Wrapper>
            {data.tree && <Level onInit={handlerInit} handler={handlerInput} data={data.tree}/>}
        </Wrapper>
    )
});