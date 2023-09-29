import styled from "styled-components";

export const MiniCardContain = styled.div`
    display = grid;
    grid-template-columns: ${props=>props.large ? '10% 90% ': '0% 70%'};
    column-gap: 15px;
    width: ${props=>props.large ? '200px' : '150px'};
`;

export const LeftMiniCardItem = styled.img`
    display: flex;
    justify-self: center;
    align-self: center;
`;

export const RightMiniCardItem = styled.p`
    color: #9C9C9C;
    font-size: 14px;
    font-weight: 550;
    width: ${props=> props.large ? '150px' : '100px'};
    text-align-last: start;
`;