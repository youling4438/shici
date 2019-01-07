import React from 'react'
import styled from 'styled-components'
import { Containerstyle } from '../styles/global-styles'
import collectedIcon from '../assets/collected.svg'

const Intro = styled.p`
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
const ChangeButton = styled.div`
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
const Tag = styled.span`
	font-size: 16px;
	color: #5c9291;
	margin: 0px 10px;
	padding: 5px 15px;
	border: 1px solid #5c9291;
	border-radius: 15px;
	:hover{
		color: #fff;
		background: #5c9291;
	}
`

function Jrsc({ jrshiciData, changeJrShici, collectJrShici }) {
	const { content, matchTags, origin, collect, orderNumber } = jrshiciData;
	const { title, dynasty, author } = origin;
	const matchTagsDom = matchTags.map((tag, index) => {
		return <Tag key={index}>{tag}</Tag>;
	})
	const collectJrShiciHandle = () => {
		collectJrShici(orderNumber)
	}
	return (
		<div>
			<Containerstyle />
			<p className={'container'}>
				<Intro>
					{content}
					<div className={'from'} >
						------{author} {dynasty} {title}
						<span className={collect ? 'collected' : 'collect'}><img src={collectedIcon} onClick={collectJrShiciHandle} /></span>
					</div>
					{matchTagsDom}
				</Intro>
				<ChangeButton>
					<a className={'changeButton'} onClick={changeJrShici}>随机诗词</a>
				</ChangeButton>
			</p>
		</div>
	)
}

export default Jrsc
