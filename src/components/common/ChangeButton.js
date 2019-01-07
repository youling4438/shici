import styled from 'styled-components'

export const ChangeButton = styled.div`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;

    .changeButton{
        cursor: pointer;
        color: #000;
        border-bottom: 1px dashed currentColor;
        margin: 0 15px;
    }

    .changeButton:hover{
        border-bottom-style: solid;
    }
`