import { React, useEffect, useState } from 'react';
import { Frame, Image, List, Row, Col, Words, Project, Blockquote, Code, Line } from 'arwes';

import profileImg from '../static/img/profile.jpg'
const Profile = () => {
    const [currentContent, setContent] = useState(0)
    const profileContent = [
        { title: "Biomedical Engineering", content: "I am majoring in biomedical engineering at Tufts University. I especially interested in developing medical devices, especially diagnostic systems. I believe that intersecting biology, data science, engineering, and psychology would make solutions that would improve lives of patients and doctors." },
        { title: "I love to create", content: "Whether it is drawing a webtoon, recording a Lego stop motion animation, developing an application, or writing a research report, my brain is always on a quest to create something new and meaningful." },
        { title: "Big talks", content: "The more I live in the US, the more I appreciate the role of small talks in connecting with people. However, I believe big talks are the conversations that get me to learn more about others and form true friendships." },
        { title: "Interdisciplinary", content: 'History, politics, philosophy, space, technology, biology, physics, arts, engineering, and so on. I need learn and explore new disciplines to excel in solving crossword puzzles.' },
        { title: "Some books and movies", content: "No matter how much I hate lying sleepless after reading Homo Sapiens written by Yuval Noah Harari, it is still the most important book I have every read (even more important than biomechanics textbook). My most favorite movies are Interstellar, Avatar (2009), and Attraction (yes, all science fictions). Most favorite anime: Koe No Katachi and most of Studio Ghibli movies." },
    ];

    useEffect(() => {
        const valueToSet = (currentContent === profileContent.length - 1) ? 0 : currentContent + 1;

        let delay = setTimeout(() => setContent(valueToSet), 7000);
        return () => {
            clearTimeout(delay);
        }
    }, [currentContent])


    return (
        <Frame
            animate={true}
            level={3}
            corners={3}
            layer='secondary'
            style={{ marginTop: 70, marginBottom: 40 }}
        >
            <Col s={12} m={6}> <Image animate resources={profileImg} style={{ margin: "0px auto" }} layer="secondary" ><Code animate type='pre' language='javascript' style={{ margin: 0 }}>{
                `// awaiting quality_image`
            }</Code></Image></Col>

            <Row>
                <Col s={12} m={6}><List node='dl' layer="primary" style={{ margin: 0, fontSize: 16, paddingTop: 10 }}>
                    <dt>Legal first name:</dt>
                    <dd>Tien Long</dd>
                    <dt>Preferred name:</dt>
                    <dd>Artem</dd>
                    <dt>Last name:</dt>
                    <dd>Dinh</dd>
                    <dt>Ukrainian full name:</dt>
                    <dd>Дінь Артем Шоновіч</dd>
                    <dt>Vietnamese full name:</dt>
                    <dd>Đinh Tiên Long</dd>
                    <Line animate style={{ margin: "10px 0px" }} />
                    <dt>College:</dt>
                    <dd>Tufts Univeristy '23</dd>
                    <dt>Target degree:</dt>
                    <dd>BS Biomedical Engineering</dd>
                </List></Col>


            </Row>

            <Blockquote style={{ margin: 30 }} data-layer='disabled'>Beep-boop... Hi! Thanks for dropping by! I hope this site will give you some insight into me. If you find something in common or have anything to share, I am all ears!</Blockquote>

            <div style={{ margin: 10, position: "relative" }}>
                <Project
                    animate
                    header={profileContent[currentContent].title}
                >
                    {anim => (
                        <p style={{ minHeight: 200, marginBottom: 20 }}><Words animate show={anim.entered}>
                            {profileContent[currentContent].content}
                        </Words></p>
                    )}

                </Project>
                <div style={{ zIndex: 100, position: "absolute", bottom: 5, left: 0, width: "100%", display: "flex", alignItem: "center", justifyContent: "center" }}>
                    {profileContent.map(i => <div onClick={() => setContent(profileContent.indexOf(i))} style={{ borderRadius: 8, width: 16, height: 16, border: "1px solid #85ebd9", cursor: "pointer", margin: "0px 3px", background: (profileContent.indexOf(i) === currentContent) ? "#85ebd9" : "none" }} />)}
                </div>
            </div>
        </Frame >
    );
}

export default Profile;