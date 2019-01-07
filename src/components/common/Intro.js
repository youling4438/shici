import styled from 'styled-components'

export const Intro = styled.p`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 40px;
    text-align: center;
    .from{
        margin-top: 20px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        line-height: 35px;
        color: #5c9291;
        .collect, .collected{
            float: right;
            cursor: pointer;
            filter: brightness(0);
            img{
                padding: 5px 10px;
                width: 25px;
            }
        }
        .collect:hover, span.collected{
            filter: brightness(1);
        }
    }
`