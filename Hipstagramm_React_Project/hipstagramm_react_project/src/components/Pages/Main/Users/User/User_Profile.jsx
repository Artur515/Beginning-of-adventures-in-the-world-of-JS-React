import {Button, Item} from "semantic-ui-react";
import style from'./style.module.css'
import React from "react";

const User_profile = () => {
    return (
        <>
            <div>
                <Item.Group relaxed>
                    <Item>
                        <Item.Image size='small'
                                    src='https://img1.picmix.com/output/stamp/normal/5/0/5/9/979505_7c404.png'/>
                        <Item.Content verticalAlign='middle'>
                            <Item.Extra>
                                <div className={style.info}>
                                    <div className={style.post}> followers:</div>
                                    <div className={style.post}> following:</div>
                                </div>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </div>
            <div className={style.line}></div>
            <Item className={style.info}>
                <Item.Content verticalAlign='middle'>
                    <h2>login</h2>
                    <span>email</span>
                </Item.Content>
                <div className={style.button}><Button  basic color='blue'>Follow</Button></div>
            </Item>
            <div className={style.line}></div>
        </>
    )
}

export default User_profile