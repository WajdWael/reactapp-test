import styled from "styled-components"

export const StyledSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    li{
        list-style: none;
    }

    a{
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;
        transition: .3s;
    }

    .linkedin:hover{
        background-color: #0E76A8;
    }

    .facebook:hover{
        background-color: #4267B2;
    }

    .twitter:hover{
        background-color: #00ACEE;
    }
`