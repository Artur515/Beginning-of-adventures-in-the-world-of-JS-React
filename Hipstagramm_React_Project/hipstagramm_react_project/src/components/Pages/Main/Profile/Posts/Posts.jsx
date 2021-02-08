import {Button, Header, Image, Modal} from "semantic-ui-react";
import React, {useState} from 'react'
import style from './style.module.css'
import {Link, NavLink} from "react-router-dom";


const Posts = () => {
    const [open, setOpen] = useState(false)

    const posts = [<Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>,
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>,
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>,
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>,
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>,
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>,
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>,
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>,
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>,
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>

    ]

    return (
        <div className={style.content}>
            {
                posts.map((item) => {
                    return (<div className={style.item}>
                            <Modal
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                open={open}
                                trigger={item}>
                                <Modal.Header>Select a Photo</Modal.Header>
                                <Modal.Content image>
                                    <NavLink to='/users/:'>
                                        <Image size='medium'
                                               src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
                                               wrapped/>
                                    </NavLink>
                                    <Modal.Description>
                                        <Header>Default Profile Image</Header>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
                                            doloremque eaque exercitationem, ipsa iste nisi nulla pariatur possimus
                                            temporibus voluptatem! Adipisci eos expedita inventore laborum magni minima
                                            optio quod similique?
                                        </p>
                                        <p></p>
                                    </Modal.Description>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='black' onClick={() => setOpen(false)}>
                                        close
                                    </Button>

                                </Modal.Actions>
                            </Modal>


                        </div>

                    )
                })
            }
        </div>
    )
}

export default Posts