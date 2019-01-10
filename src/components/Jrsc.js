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
const CollectList = styled.ul`
    text-align: left;
    font-size: 14px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 5px 10px;
    span.title {
        font-size: 40px;
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

function Jrsc({ jrshiciData, allJrShiciList, changeJrShici, collectJrShici, showPrevButton, showNextButton, prevJrShici, nextJrShici }) {
	const { content, matchTags, origin, collect, orderNumber } = jrshiciData;
	const { title, dynasty, author } = origin;
	const matchTagsDom = matchTags.map((tag, index) => {
		return <Tag key={index}>{tag}</Tag>;
    })
	const collectJrShiciHandle = () => {
		collectJrShici(orderNumber)
    }
    const prevJrShiciHandle = () => {
        prevJrShici(orderNumber - 1);
    }
    const nextJrShiciHandle = () => {
        nextJrShici(orderNumber + 1);
    }
    const collectDom = allJrShiciList.filter((item) => item.collect).map((item, index)=>{
        const { content, origin: { author } } = item;
        return <li key={index}>{content} <span>-------{author}</span></li>;
    });
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
                    {showPrevButton && <a className={'changeButton'} onClick={prevJrShiciHandle}>上一句诗词</a>}
					<a className={'changeButton'} onClick={changeJrShici}>随机诗词</a>
                    {showNextButton && <a className={'changeButton'} onClick={nextJrShiciHandle}>下一句诗词</a>}
				</ChangeButton>
                <CollectList>
                    <span className={'title'}>我的收藏：</span>
                    {collectDom}
                </CollectList>
			</p>
		</div>
	)
}

export default Jrsc
