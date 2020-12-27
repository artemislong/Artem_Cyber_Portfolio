import React, { useEffect, useState, useRef } from 'react';
import { rgba } from 'polished';
import {
  ThemeProvider, createTheme,
  SoundsProvider, createSounds, Button, withStyles, Arwes, Line, Project, Link,
  Content,
  Words, Frame, Highlight, Heading, Appear, Footer,
  Header,
  Loading,
  createLoader,
  Row, Col,
  utils
} from 'arwes';
import click from './static/sound/click.mp3';
import deploy from './static/sound/deploy.mp3';
import typing from './static/sound/typing.mp3';
import glow from './static/img/glow.png';
import small from './static/img/background-small.jpg';
import medium from './static/img/background-medium.jpg';
import large from './static/img/background-large.jpg';
import xlarge from './static/img/background-xlarge.jpg';

import Profile from './components/Profile';
import biteGuide from './static/img/biteGuide.png'
import eatDrainbow from './static/img/eatDrainbow.jpg'
import thanlan from './static/img/thanlan.png'

const resources = {
  background: {
    small,
    medium,
    large,
    xlarge,
  },
  pattern: glow
};




// loader.load({ images, sounds }).then(() => {
//   console.log('Resources were loaded.');
// }, () => {
//   console.error('Error when loading.');
// });

const mySounds = {
  shared: {
    volume: 1,
  },
  players: {
    click: {
      sound: { src: [click] },
      settings: { oneAtATime: true }
    },
    typing: {
      sound: { src: [typing] },
      settings: { oneAtATime: true }
    },
    deploy: {
      sound: { src: [deploy] },
      settings: { oneAtATime: true }
    },
  }
};

const myTheme = {
  color: {
    alert: { base: "#ff0000", light: "#f66", dark: "#900" },
    control: { base: "#acf9fb", light: "#fff", dark: "#4bf2f6" },
    disabled: { base: "#999999", light: "#ccc", dark: "#666" },
    header: { base: "#85ebd9", light: "#bafff3", dark: "#00b8c2" },
    primary: { base: "#85ebd9", light: "#bafff3", dark: "#00b8c2" },
    secondary: { base: "#d2fa0a", light: "#defe47", dark: "#88a300" },
    success: { base: "#00ff00", light: "#6f6", dark: "#090" },
  },
  typography: {
    fontFamily: '"Monaco", "Bitstream Vera Sans Mono", "Lucida Console", "Terminal", "monospace"',
    fontSize: 13,
  }
};

const styles = theme => ({
  root: {
    padding: [theme.padding, 0],
    background: theme.background.primary.level0,
    position: "sticky"
  },
  title: {
    //textDecoration: 'underline'
  },
  image: {
    width: '100%',
    height: 300,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: rgba(theme.color.primary.dark, 0.25),
    verticalAlign: 'middle',
  },
});

const MyHeader = withStyles(styles)(({ classes, children }) => (
  <header className={classes.root}>
    <h1 className={classes.title}>{children}</h1>
  </header>
));

const sections = {
  Experience: {
    title: "Experience & Projects",
    content: [
      {
        title: "Undergrad Research Volunteer, Georgakoudi Lab",
        subtitle: "Ongoing",
        content: "I am working on a software that would perform calculations and display output of the polarized laparoscopic camera."
      },
      {
        title: "Social audio platform development",
        subtitle: "Ongoing",
        content: "With support from USC Lavalab, I and our start up project team have been designing and developing a web application that would make it fun and easy to generate and enjoy community-based podcasts. We aim to solve the lack of experission problem in conventional social platforms."
      },
      {
        title: "Stanford Cleantech 2020 - Finalist Team",
        subtitle: "April 2020",
        content: "My team was one of 8 finalist teams out of over 50 participating groups. We researched electrification of specialty fleets and V2H and V2G technologies, proposed business opportunity for Ford to penetrate first-responder electric vehicle market."
      },
      {
        title: "Volunteer @ College of San Mateo's Astronomy Department",
        subtitle: "August 2019 - March 2020",
        content: "As a member of CSM's Astronomy Club, I assisted the Astronomy Department in organizing start gazing events and planetarium shows and promoted our programs at college and city fairs. Of course, I enjoyed setting up telescopes at star clusters, nebulas as well as watching space shows in the planetarium."
      },
      {
        title: "NSSG Media and Event Organizing - Founder",
        subtitle: "May 2018 - April 2019",
        content: "I founded NSSG media group with over 60 talented students in media, art, and photography clubs from different schools to share life moments of high school life in our city. We attracted over 30,000 organic followers on our Facebook Page. We also organized a photography competition that attracted 140 contestants, 400 exhibition visitors, and over 2 million views.",
        link: "https://www.facebook.com/nusinhsaigon/",
      },
    ]
  },
  Play: {
    title: "Some playful projects",
    content: [
      {
        title: "Covidtrip - Information for travelers",
        subtitle: "August 2020",
        content: "I and my friend, Konstantin, built an application that gets newest data from creditable sources to provide travelers with helpful information on travel restrictions, local policies, and so on. Unfortunately, due to financial limitations, the data scraper is not working, but feel free to visit our site below.",
        link: "https://www.covidtrip.info",
      },
      {
        title: "Biteguide - A simple skill sharing platform",
        subtitle: "August 2020",
        content: "A full stack application on which users create text tutorials that are split into small sections called 'bites'. I did it for fun, and there is still a lot to do to make a fully working prototype.",
        image: biteGuide,
      },
      {
        title: "Smart Food Plate - Stanford Design Challenge",
        subtitle: "Dec 2019",
        content: "A fun project in which I and two other students came up with a food plate design that would help educators and food campaigns to teach nutrition effectively. Our motivation for this project was the nutrion deficiency problem among children in Northern Vietnamese Highlands that is being fought by local government, NPOs, and volunteers.",
        image: eatDrainbow,
      },
      {
        title: "ThangThanLan - Webtoon Page",
        subtitle: "About 2 years",
        content: "The page started with single page comics drawn by me and my friends about anything ranging from Jojo and games to social and political affairs. All characters were in the form of lizards inspired by the image of a sock puppet from a famous meme. As the page gained more popularity, we focused on satire and sarcastic content about global and Vietnamese history, society and politics. The page has reached over 52,000 followers recently.",
        image: thanlan,
      },

    ]
  },
  Ideas: {
    title: "Thoughts & Ideas",
    content: [
      {
        title: "Some thoughts about history",
        content: "I am always interested in history, whether it is history of a country, a culture, or a company. I learn history to understand the present, to be myself, and to own my future. As Yuval Noah Harari wrote in 'Homo Deus', knowing the dark history of grass lawn will give us the choice not to grow one. Unfortunately, history being taught in a wrong way in many education systems, and I hope this will change one day soon.",
      },
      {
        title: "Do we actually make our decisions?",
        content: "The more I read and learn about human nature and how our mind works, the more I wonder if we have the power over our decisions. In other words, is there a preprogrammed decision making mechanism in our minds that would make the exact same decisions given the same input and environment (family values, surrounding culture, hormone activity, etc)? If our decisions and behaviors can be predicted with high accuracy, what would the role of our consciousness be then?",
      },
      {
        title: "A shirt that would automatically scratch my back for me",
        content: "I need it.",
      },
      {
        title: "An intercontinental hyperloop",
        content: "Why not? Pirates will lose their jobs for sure.",
      },
    ]
  }
}

const HighlightNav = ({ section, setSection }) => {
  return (<Highlight layer='secondary' onClick={() => setSection(section)}>
    <div style={{ padding: '15px', cursor: 'pointer' }}>{section}</div>
  </Highlight>)
}

const InfoFrame = withStyles(styles)(({ classes }) => {
  const [currentSection, setSection] = useState("Experience")
  // const [shownIndex, setShownIndex] = useState(0);

  // useEffect(() => {
  //   emergence.init({
  //     container: window,
  //     throttle: 200,
  //     callback: (element, state) => {
  //       if (state === 'visible') {
  //         const newIndex = element.getAttribute('data-index');
  //         console.log("current newindex is: ", newIndex)
  //         if (newIndex > shownIndex) {
  //           setShownIndex(newIndex);
  //         }
  //       }
  //     }
  //   })
  //   setTimeout(() => emergence.engage(), 0)
  // }, [shownIndex])

  return (<Frame animate={true}
    level={3}
    corners={4}
    layer='secondary'>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <HighlightNav section="Experience" setSection={setSection} />
      <HighlightNav section="Play" setSection={setSection} />
      <HighlightNav section="Ideas" setSection={setSection} />
    </div>
    <Line animate layer="secondary" style={{ width: "70%", margin: "0px auto 10px auto" }} />

    <div style={{ padding: 10, display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Heading layer="secondary" node='h3' style={{ marginBottom: 10 }}>{sections[currentSection].title}</Heading>
      {sections[currentSection].content.map((i, index) => <Project
        key={index}
        animate
        headerSize="h3"
        // data-index={index}
        // // data-emergence="hidden"
        // // show={index <= shownIndex}
        header={i.title}
        style={{ maxWidth: 600, margin: "10px 0px" }}
      >
        {anim => (
          <React.Fragment>
            <p style={{ fontStyle: "italic", color: "#d2fa0a" }}>
              <Words animate show={anim.entered}>
                {i.subtitle}
              </Words></p>
            <p><Words animate show={anim.entered}>
              {i.content}
            </Words></p>
            {i.link && <Link href={i.link} target="_blank"><p style={{ textDecoration: "underline" }}>Visit our site</p></Link>}
            {i.image && (
              <Appear
                animate
                show={anim.entered}
              ><img src={i.image} className={classes.image} /></Appear>
            )}
          </React.Fragment>
        )}
      </Project>)}
      <p style={{ marginTop: 20 }}>Oh no, the list ends here for your universe.</p>
    </div>


  </Frame>)
})

const App = () => {
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => { setLoaded(true); setShow(true) }, 5000);
  });

  //scrool
  const Contact = useRef(null)
  const Top = useRef(null)
  const scrollContact = () => Contact.current.scrollIntoView()
  const scrollTop = () => Top.current.scrollIntoView()

  return (
    <ThemeProvider theme={createTheme(myTheme)}>
      <SoundsProvider sounds={createSounds(mySounds)}>
        <div>
          <Loading
            full
            animate
            show={!loaded}
            animation={{
              unmountOnExit: true
            }}
          />
          <Arwes
            animate
            show={show}
            showResources={show}
            background={resources.background}
            pattern={resources.pattern}
          >
            <Row>
              <Col s={12} m={10} l={7} offset={['s0', 'm2', 'l3']}>
                {show && <React.Fragment>

                  <Content >
                    <Header animate style={{ position: "sticky", top: 0, zIndex: 50 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h1 style={{ margin: 0, marginLeft: 10 }}>Artem Dinh</h1>
                        <div>
                          <a href="https://www.linkedin.com/in/long-artem-dinh/" target="_blank"><Button layer="secondary" style={{ margin: "0px 5px" }} animate>LinkedIn</Button></a>
                          <Button onClick={scrollContact} layer="primary" style={{ margin: "0px 5px" }} animate>Find Me</Button></div>
                      </div>
                    </Header>
                    {/* profile blocl */}
                    <div ref={Top} />
                    <Profile />

                    {/* detailed info frame */}
                    <InfoFrame />
                  </Content>

                </React.Fragment>}
                <Footer animate style={{ marginTop: 50 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3 style={{ margin: 0, marginTop: 10, color: "#d2fa0a" }} ref={Contact}>Artem Dinh - Tien Long Dinh</h3>
                    <p style={{ margin: 0 }}>I am always happy to meet new friends and ideas.</p>
                    <p style={{ margin: 0 }}>Email: <Link href="mailto: tdinh02@tufts.edu">tdinh02@tufts.edu</Link> &#9679;  <Link style={{ textDecoration: "underline" }} href="https://www.linkedin.com/in/long-artem-dinh/" target="_blank">LinkedIn</Link> &#9679; <Link style={{ textDecoration: "underline" }} href="https://www.instagram.com/artemdinh/" target="_blank">Instagram</Link></p>
                    <Button animate layer="secondary" style={{ margin: 10, height: 20 }} onClick={scrollTop}>Back to top</Button>
                  </div> </Footer>
              </Col>
            </Row>

          </Arwes>

        </div>
      </SoundsProvider>
    </ThemeProvider>
  )
};

export default App;