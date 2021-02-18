import React from 'react';
import styled from 'styled-components';
import SideBar from './sidebar';
import EmailsView from './emailsView';
import SideIcons from './sideIcons';

function Main() {
    return (
        <Wrapper>
            <SideBar/>
            <EmailsView/>
            <SideIcons/>

        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
    display : grid;
    grid-template-columns : 270px auto 50px
`
