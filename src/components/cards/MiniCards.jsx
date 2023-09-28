import { MiniCardContain, 
RightMiniCardItem,
LeftMiniCardItem } from "../styles/MiniCardStyles";

function MiniCard(props){
    return (
        <MiniCardContain>
            <LeftMiniCardItem src={props.image} alt="alt"/>
            <RightMiniCardItem>
                {props.texts}
            </RightMiniCardItem>
        </MiniCardContain>
    )
}

export default MiniCard;