import React from 'react'
import styled from 'styled-components'
import { Intro, ChangeButton } from './common'
import { Containerstyle } from '../styles/global-styles'
import collectedIcon from '../assets/collected.svg'

const TagContainer = styled.p`
	text-align: center;
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
					<TagContainer>{matchTagsDom}</TagContainer>
				</Intro>
				<ChangeButton>
					<a className={'changeButton'} onClick={changeJrShici}>随机诗词</a>
				</ChangeButton>
			</p>
		</div>
	)
}

export default Jrsc
