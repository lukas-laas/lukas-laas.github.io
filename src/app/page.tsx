/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image"
import styles from "./page.module.css"
import { Container } from "@/components/Container"
import Slider from "@madzadev/image-slider"
import "@madzadev/image-slider/dist/index.css"

const images = [
  { url: "/images/image (1).png" },
  { url: "/images/image (2).png" },
  { url: "/images/image (3).png" },
  { url: "/images/image (4).png" },
  { url: "/images/image (5).png" },
]

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="Background"></div>
        <Container
          header={<>WORK EXPERIENCE</>}
          content={[
            {
              sub_header: (
                <>
                  {" "}
                  2 MONTH SUMMER JOB AT{" "}
                  <a
                    href="https://brick.tech"
                    style={{
                      fontSize: "inherit",
                      textDecorationLine: "underline",
                    }}
                  >
                    BRICK TECHNOLOGY
                  </a>
                </>
              ),
              body: (
                <>
                  <p>
                    I worked on their admin dashboard as a full-stack developer.
                    The dashboard is written in React using TypeScript which
                    fetches data from DynamoDB and the endpoints are written in
                    TypeScript. One of the things I added was a feature to edit
                    the pictures of brick venues from their dashboard.
                  </p>
                  <p>
                    Added some features to{" "}
                    <a
                      href="brick.tech"
                      style={{ textDecorationLine: "underline" }}
                    >
                      their public website
                    </a>
                    , including some translations and adding some new content.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      maxWidth: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Slider
                      showArrowControls={false}
                      autoPlayInterval={6000}
                      imageList={images}
                      width={800}
                      height={500}
                    />
                  </div>
                </>
              ),
              imageSlider: true,
            },
            {
              sub_header: (
                <>
                  10 WEEK INTERNSHIP AT{" "}
                  <a
                    href="https://brick.tech"
                    style={{
                      fontSize: "inherit",
                      textDecorationLine: "underline",
                    }}
                  >
                    BRICK TECHNOLOGY
                  </a>
                </>
              ),
              body: (
                <>
                  <p>
                    As part of my education I had a 10 week internship, during
                    this internship I worked on their admin dashboard as a
                    front-end developer. The page is written in react using
                    TypeScript.
                  </p>
                </>
              ),
            },
          ]}
        />
        <Container
          header={"Personal Projects"}
          content={[
            {
              sub_header: (
                <a href="lukas-music.vercel.app">
                  Music portfolio: lukas-music.vercel.app
                </a>
              ),
              body: <>A Next.js app where I can share my musical endeavours.</>,
            },
          ]}
        />

        <div id="education" className="Container BoxShadow">
          <div className="title">
            <h1>EDUCATION</h1>
          </div>
          <div>
            <h2>
              Gymnasieingenjörsexamen med inriktning "informationsteknik" från
              NTI-Gymnasiet
            </h2>
            <p>
              "Vidareutbildning i form av ett fjärde tekniskt år, profil:
              informationsteknik."
            </p>
            <p>
              EN: "Continuing education in the form of a fourth technical year,
              profile: information technology"
            </p>
            <p>
              Learn more on Wikipedia, Skolverket or ask me to send a more
              thorough explanation.
            </p>
          </div>
        </div>
        <div id="projects" className="Container BoxShadow">
          <div className="title">
            <h1>SCHOOL PROJECTS</h1>
          </div>
          <div className="divider">
            <h2>nti-nedräkning</h2>
            <p>
              Website designed to display the time left in different courses and
              total time left until summer, written in next using typescript.
            </p>
            <a href="https://nti-nedrakning.vercel.app" target="_blank">
              <Image
                style={{ width: "50%", height: "auto" }}
                src="/images/nti-nedrakning.PNG"
                alt="Screenshot of website"
                width={828}
                height={465}
              />
              <br />
              nti-nedrakning.vercel.app
            </a>
          </div>
          <div className="divider">
            <h2>Lunch-pad</h2>
            <p>
              Too keep track of how many students eat every day we built a
              device with a tag reader. When a student scans their tag they are
              added to a counter and by the end of each day the data is uploaded
              to a google spreadsheet.
            </p>
            <Image
              style={{ width: "50%", height: "auto" }}
              src="/images/lunchpad.png"
              alt="Picture of lunchpad"
              width={1920}
              height={1080}
            />
          </div>
          <div className="divider">
            <h2>Pizzeria Rafiki</h2>
            <p>
              Website designed for a mock pizzeria. The website's functions are
              tested automatically.
            </p>
            <a
              href="https://ntig-uppsala.github.io/pizzeria-rafiki/"
              target="_blank"
            >
              <Image
                style={{ width: "50%", height: "auto" }}
                src="/images/pizzeriarafiki.PNG"
                alt="Screenshot of website"
                width={1920}
                height={1080}
              />
              <br />
              ntig-uppsala.github.io/pizzeria-rafiki/
            </a>
          </div>
          <div>
            <h2>Bengans biluthyrning</h2>
            <p>
              Website designed for a mock car rental company. Parts of the
              website (different languges) is locally generated using Python.
            </p>
            <a
              href="https://ntig-uppsala.github.io/Bengans-Biluthyrning/"
              target="_blank"
            >
              <Image
                style={{ width: "50%", height: "auto" }}
                src="/images/bengansbiluthyrning.PNG"
                alt="Screenshot of website"
                width={1920}
                height={1080}
              />
              <br />
              ntig-uppsala.github.io/Bengans-Biluthyrning/
            </a>
          </div>
        </div>
        <div id="programmingLanguages" className="Container BoxShadow">
          <div className="title">
            <h1>PROGRAMMING LANGUAGES</h1>
          </div>
          <p>Python</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>TypeScript (React, NEXT)</p>
          <p>C#</p>
        </div>
        <div id="languages" className="Container BoxShadow">
          <div className="title">
            <h1>LANGUAGES</h1>
          </div>
          <p>Swedish - first language</p>
          <p>English - fluent</p>
        </div>
        <div id="otherMerits" className="Container BoxShadow">
          <div className="title">
            <h1>OTHER MERITS</h1>
          </div>
          <h2>Certificate</h2>
          <a href="https://www.credly.com/badges/cea83095-b6e5-4f85-b3e3-7558b9d7ac76">
            MTA: Introduction to Programming Using Python
          </a>
          {/* <div
            style={{
              backgroundColor: "white",
              width: "150px",
              height: "270px",
            }}
          >
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="cea83095-b6e5-4f85-b3e3-7558b9d7ac76"
              data-share-badge-host="//https://www.credly.com"
            ></div>
            <script
              type="text/javascript"
              async
              src="//cdn.credly.com/assets/utilities/embed.js"
            ></script>
          </div> */}
          <h2>GitHub</h2>
          <a
            className="linkStyle"
            href="https://github.com/lukas-laas"
            target="_blank"
          >
            github.com/lukas-laas
          </a>
        </div>
        <div id="contact" className="Container BoxShadow">
          <div className="title">
            <h1>CONTACT</h1>
          </div>
          <a href="mailto:lukas.s.laas@gmail.com" id="MailAdress">
            lukas.s.laas@gmail.com
          </a>
          <br />
          <a href="tel:+46763118727" id="Phone">
            +46 76 311 87 27
          </a>
          <br />
          <a href="https://www.linkedin.com/in/lukas-l%C3%A5%C3%A5s-48931b251">
            LinkedIn
          </a>
        </div>
      </main>
    </>
  )
}
