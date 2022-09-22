import styled from "styled-components";

export const TopPost = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const PostProfilePicture = styled.img<{ width?: string, noShadow?: boolean }>`
    width: ${ props => props.width ? props.width : '80px' };
    height: ${ props => props.width ? props.width : '80px' };
    border-radius: 50%;
    object-fit: cover;
    border: solid 3px white;

    ${ props => !props.noShadow && `
        box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, 
                    rgba(17, 17, 26, 0.1) 0px 16px 56px, 
                    rgba(17, 17, 26, 0.1) 0px 24px 80px;
    `}

 `

export const PostName = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 5px;

    h3 {
        margin: 0px;
    }

    span {
        color: ${ props => props.theme.color.lines };
        text-shadow: 3px 4px 7px ${({theme}) => 
            theme.name === 'Dark' ? theme.color.background : theme.color.third};
        font-size: 0.9em;
    }
`

export const PostText = styled.div<{ show: boolean }>`
    width: 100%;
    height: ${ props => props.show ? "auto" : '4.9em' };
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 10px;
    margin-bottom: 0px;
`

export const ShowMore = styled.span`
    cursor: pointer;
    margin-left: 15px;
    color: ${({theme}) => theme.name === 'Dark' ? theme.color.third : theme.color.main };
    
    ::after {
        content: '';
        width: 100%;
        height: 20px;
        display: block
    }
`

export const PostPicture = styled.img`
    width: 100%;
    height: auto;
    max-width: calc(100% + 40px);
    max-height: 400px;
    object-fit: cover;
`
