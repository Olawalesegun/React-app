import { MiniCardContain, RightMiniCardItem,LeftMiniCardItem } from "../styles/MiniCardStyles";

function MiniCard(props){
    return (
        <MiniCardContain large={peops.large}>
            <LeftMiniCardItem src={props.image} alt="alt"/>
            <RightMiniCardItem large={props.large}>{props.text}</RightMiniCardItem>
        </MiniCardContain>
    )
}

export default MiniCard;