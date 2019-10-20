import React from "react";
import styled from "styled-components";
import { Intro, ChangeButton, CollectList } from "./common";
import { Containerstyle } from "../styles/global-styles";
import collectedIcon from "../assets/collected.svg";
import deletedIcon from "../assets/delete_hover.svg";

const TagContainer = styled.p`
    text-align: center;
`;

const Tag = styled.span`
    font-size: 16px;
    color: #5c9291;
    margin: 0px 10px;
    padding: 5px 15px;
    border: 1px solid #5c9291;
    border-radius: 15px;
    :hover {
        color: #fff;
        background: #5c9291;
    }
`;

function Jrsc({
    jrshiciData,
    allJrShiciList,
    changeJrShici,
    collectJrShici,
    insertShici,
    showPrevButton,
    showNextButton,
    prevJrShici,
    nextJrShici,
    jrShiciDetail,
    jsShiciDelete
}) {
    const { content, matchTags, origin, collect, orderNumber } = jrshiciData;
    const { title, dynasty, author } = origin;
    const matchTagsDom = matchTags.map((tag, index) => {
        return <Tag key={index}>{tag}</Tag>;
    });
    const collectJrShiciHandle = () => {
        insertShici(jrshiciData);
        collectJrShici(orderNumber);
    };
    const prevJrShiciHandle = () => {
        prevJrShici(orderNumber - 1);
    };
    const nextJrShiciHandle = () => {
        nextJrShici(orderNumber + 1);
    };
    const collectDom = allJrShiciList
        .filter(item => item.collect)
        .map((item, index) => {
            const {
                content,
                origin: { author }
            } = item;
            const clickJrShiciDetailHandle = () => {
                jrShiciDetail(item);
            };
            const deleteShiciItemHandle = () => {
                console.log("item._id", item._id);
                jsShiciDelete(item, index);
            };
            return (
                <li
                    key={index}
                    onClick={clickJrShiciDetailHandle}
                    className={"itemDetail"}
                >
                    {content}
                    <span>
                        -------{author}
                        <img
                            src={deletedIcon}
                            onClick={e => {
                                // 阻止事件冒泡
                                e.stopPropagation();
                                e.nativeEvent.stopImmediatePropagation();
                                console.log("delete shici:", index);
                                deleteShiciItemHandle();
                                // return false;
                            }}
                        />
                    </span>
                </li>
            );
        });
    return (
        <div>
            <Containerstyle />
            <p className={"container"}>
                <Intro>
                    {content}
                    <div className={"from"}>
                        ------{author} {dynasty} {title}
                        <span className={collect ? "collected" : "collect"}>
                            <img
                                src={collectedIcon}
                                onClick={collectJrShiciHandle}
                            />
                        </span>
                    </div>
                    <TagContainer>{matchTagsDom}</TagContainer>
                </Intro>
                <ChangeButton>
                    {showPrevButton && (
                        <a
                            className={"changeButton"}
                            onClick={prevJrShiciHandle}
                        >
                            上一句诗词
                        </a>
                    )}
                    <a className={"changeButton"} onClick={changeJrShici}>
                        随机诗词
                    </a>
                    {showNextButton && (
                        <a
                            className={"changeButton"}
                            onClick={nextJrShiciHandle}
                        >
                            下一句诗词
                        </a>
                    )}
                </ChangeButton>
                {collectDom.length > 0 && (
                    <CollectList>
                        <span className={"title"}>我的收藏：</span>
                        {collectDom}
                    </CollectList>
                )}
            </p>
        </div>
    );
}

export default Jrsc;
