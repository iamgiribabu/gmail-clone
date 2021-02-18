import React from 'react'
import styled from 'styled-components'
import Compose from './buttons/Compose'
import { sidebarButtonItem } from '../data/SideBarButtonItems'
const Sidebar = () => {
    return (
        <Wrapper>
            <ComposeWrapper>
                {/**compose button */}
                <Compose/>
            </ComposeWrapper>
            <SideButonsWrapper>
                {/**all the buttons */
                    sidebarButtonItem.map(item => (
                        <SidebarButtonItem>{item.icon} {item.text}</SidebarButtonItem>
                    ))
                }

            </SideButonsWrapper>
            <MeetWrapper>
                {/**google meet staffs */}
            </MeetWrapper>
            <HangoutWrapper>
                {/**hangout stuffs */}
            </HangoutWrapper>
            <ButtonIconsWrapper>
            {/** */}
            </ButtonIconsWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    border-right : 1px solid lightgray;
    height : 100vh;
`

const ComposeWrapper = styled.div`
    display : grid;
    place-items : start;
    padding : 10px 20px;
`

const SideButonsWrapper = styled.div``

const SidebarButtonItem = styled.div`
    display : grid ;
    grid-template-columns : 14% auto;
    color : gray; 
    padding : 5px 25px;
    cursor: pointer;
    margin-right : 8px;
    border-radius : 0 100px 100px 0;

    :hover{
        background-color : #f5f7f7;
    }
`

const MeetWrapper = styled.div``

const HangoutWrapper = styled.div``

const ButtonIconsWrapper = styled.div``
