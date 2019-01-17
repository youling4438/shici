import styled from 'styled-components'

export const CollectList = styled.ul`
    text-align: left;
    font-size: 14px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 5px 10px;
    span.title {
        font-size: 40px;
    }
    li.itemDetail {
        cursor: pointer;
    }
    li {
        margin: 5px 10px;
        color: #fff;
        padding: 10px;
        background: #5c9291;
        border-radius: 3px;
        border: 1px solid #5c9291;
    }

    li:hover{
       color: #5c9291;
       background: #fff;
    }

    li span {
        float: right;
    }
`
