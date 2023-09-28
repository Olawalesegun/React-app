import React from 'react'
import { LeftHeader, MainHeader } from './styles';
import MiniCard from '../../components/cards/MiniCards';

function Header(){
    return (
        <MainHeader>
            <HeaderContain>
                <LeftHeader>
                    <MiniCard image={BusinessLogo} text={'Business'}/>

                    <MiniCard image={PersonalLogo} text={'Personal'}/>
                </LeftHeader>
                <RightHeader>
                    <MiniCard image={PhoneLogo} text={'+234-902-344'}
                </RightHeader>
            </HeaderContain>
        </MainHeader>
        //<div>index</div>
    )
}

export default Header;