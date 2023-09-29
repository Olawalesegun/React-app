import React from 'react'
import { LeftHeader, MainHeader } from './styles';
import MiniCard from '../../components/cards/MiniCards';
import BusinessLogo from '../../assets/images/svg/';
import PersonalLogo from '../../assets/images/svg/';
import PhoneLogo from '';

function Header(){
    return (
        <MainHeader>
            <HeaderContain>
                <LeftHeader>
                    <MiniCard large={false} image={BusinessLogo} text={'Business'}/>

                    <MiniCard large={false} image={PersonalLogo} text={'Personal'}/>
                </LeftHeader>
                <RightHeader>
                    <MiniCard  large={true} image={PhoneLogo} text={'+234-902-344-56-444'}/>
                    <MiniCard large={true}/>
                </RightHeader>
            </HeaderContain>
        </MainHeader>
        //<div>index</div>
    )
}

export default Header;