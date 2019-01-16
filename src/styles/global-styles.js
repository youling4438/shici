import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`
    @font-face {
        /* font-test*/
        font-family: huawenxingkai;
        src:url('../assets/font/fzxk.TTF');
    }

	html,
	body {
		height: 100%;
		width: 100%;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
`
export const Containerstyle = createGlobalStyle`
    .container{
        width: 85%;
        margin: 0 auto;
    }
`
export const Buttonstyle = createGlobalStyle`
    .button{
		display: inline-block;
		cursor: pointer;
		padding: 10px 15px;
		margin-left: 15px;
		margin-right: 15px;
		border: 1px solid currentColor;
		border-radius: 2px;
    }
    .button:hover{
      	color: #5c9291
    }
    .button:active{
      	color: #43676b
    }
`
