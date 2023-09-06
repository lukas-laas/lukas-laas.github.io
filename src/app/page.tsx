import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <header class="BoxShadow">
        <div class="Logo">
          <h1>LUKAS LÅÅS</h1>
        </div>
        <nav>
          <a class="navItems" href="#workExperience">
            EXPERIENCE
          </a>
          <a class="navItems" href="#education">
            EDUCATION
          </a>
          <a class="navItems" href="#projects">
            PROJECTS
          </a>
          <a class="navItems" href="#programmingLanguages">
            PROGRAMMING LANGUAGES
          </a>
          <a class="navItems" href="#languages">
            LANGUAGES
          </a>
          <a class="navItems" href="#otherMerits">
            MERITS
          </a>
          <a class="navItems" href="#contact">
            CONTACT
          </a>
        </nav>
      </header>
      <main className={styles.main}>
        <div class="Background"></div>

        <div id="workExperience" class="Container BoxShadow">
          <div class="title">
            <h1>WORK EXPERIENCE</h1>
          </div>
          <div class="divider">
            <h2>
              2 MONTH SUMMER JOB AT{" "}
              <a href="https://brick.tech" style={{ fontSize: "inherit" }}>
                BRICK TECHNOLOGY
              </a>
            </h2>
            <p>
              I worked on their admin dashboard as a full-stack developer. The
              dashboard is written in React using TypeScript which fetches data
              from DynamoDB and the endpoints are written in TypeScript. One of
              the things I added was a feature to edit the pictures of brick
              venues from their dashboard.
            </p>
            <p>
              Added some features to their public website, including some
              translations and adding some new content.
            </p>
            <p></p>
          </div>
          <div>
            <h2>
              10 WEEK INTERNSHIP AT
              <a href="https://brick.tech" /* style="font-size: inherit" */>
                BRICK TECHNOLOGY
              </a>
            </h2>
            <p>
              As part of my education I had a 10 week internship, during this
              internship I worked on their admin dashboard as a front-end
              developer. The page is written in react using TypeScript.
            </p>
          </div>
        </div>
        <div id="education" class="Container BoxShadow">
          <div class="title">
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
        <div id="projects" class="Container BoxShadow">
          <div class="title">
            <h1>SCHOOL PROJECTS</h1>
          </div>
          <div class="divider">
            <h2>nti-nedräkning</h2>
            <p>
              Website designed to display the time left in different courses and
              total time left until summer, written in next using typescript.
            </p>
            <a href="https://nti-nedrakning.vercel.app" target="_blank">
              <img
                /* style="width: 100%" */
                src="assets/images/nti-nedrakning.PNG"
                alt="Screenshot of website"
              />
            </a>
            <a
              class="linkStyle"
              href="https://nti-nedrakning.vercel.app"
              target="_blank"
            >
              nti-nedrakning.vercel.app
            </a>
          </div>
          <div class="divider">
            <h2>Lunch-pad</h2>
            <p>
              Too keep track of how many students eat every day we built a
              device with a tag reader. When a student scans their tag they are
              added to a counter and by the end of each day the data is uploaded
              to a google spreadsheet.
            </p>
            <img
              /*             style="width: 100%"
               */ src="assets/images/lunchpad.png"
              alt="Picture of lunchpad"
            />
          </div>
          <div class="divider">
            <h2>Pizzeria Rafiki</h2>
            <p>
              Website designed for a mock pizzeria. The website's functions are
              tested automatically.
            </p>
            <a
              href="https://ntig-uppsala.github.io/pizzeria-rafiki/"
              target="_blank"
            >
              <img
                /*               style="width: 100%"
                 */ src="assets/images/pizzeriarafiki.PNG"
                alt="Screenshot of website"
              />
            </a>
            <a
              class="linkStyle"
              href="https://ntig-uppsala.github.io/pizzeria-rafiki/"
              target="_blank"
            >
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
              <img
                /*               style="width: 100%"
                 */ src="assets/images/bengansbiluthyrning.PNG"
                alt="Screenshot of website"
              />
            </a>
            <a
              class="linkStyle"
              href="https://ntig-uppsala.github.io/Bengans-Biluthyrning/"
              target="_blank"
            >
              ntig-uppsala.github.io/Bengans-Biluthyrning/
            </a>
          </div>
        </div>
        <div id="programmingLanguages" class="Container BoxShadow">
          <div class="title">
            <h1>PROGRAMMING LANGUAGES</h1>
          </div>
          <p>Python</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>TypeScript (React, NEXT)</p>
          <p>C#</p>
        </div>
        <div id="languages" class="Container BoxShadow">
          <div class="title">
            <h1>LANGUAGES</h1>
          </div>
          <p>Swedish - first language</p>
          <p>English - fluent</p>
        </div>
        <div id="otherMerits" class="Container BoxShadow">
          <div class="title">
            <h1>OTHER MERITS</h1>
          </div>
          <h2>Certificate</h2>
          <p>MTA: Introduction to Programming Using Python</p>
          <div /* style="background-color: white; width: 150px; height: 270px" */
          >
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="cea83095-b6e5-4f85-b3e3-7558b9d7ac76"
              data-share-badge-host="https://www.credly.com"
            ></div>
            <script
              type="text/javascript"
              async
              src="//cdn.credly.com/assets/utilities/embed.js"
            ></script>
          </div>
          <h2>GitHub</h2>
          <a
            class="linkStyle"
            href="https://github.com/lukas-laas"
            target="_blank"
          >
            github.com/lukas-laas
          </a>
        </div>
        <div id="contact" class="Container BoxShadow">
          <div class="title">
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
