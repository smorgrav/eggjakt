import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";

export default function Home() {
  const [egg, setEgg] = useState("");
  const [bokstav, setBokstav] = useState("");
  const [hiddenEgg, setHiddenEgg] = useState("");

  useEffect(()=> {
    fetch(`/api/egg`).then(response => {
      response.json().then(json => {
        setHiddenEgg(json.egg);
      })
    })
  })

  const handleSubmit = (event) => {
    fetch(`/api/bokstav?egg=${egg}`).then(response => {
      response.json().then(json => {
        if (json.bokstav) {
          setBokstav(json.bokstav)
        } else {
          setBokstav("Ikke ett egg")
        }
      })
    })
  }

  const handleChange = (event) => {
    setEgg(event.target.value || '');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Eggjakten 2022</title>
        <meta name="egg" content="EGG{H3M3L1G}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Eggjakten 2022
        </h1>

        <p className={styles.description}>
          Egg #1
          <code className={styles.code}>EGG&#123;Påske er kult!&#125;</code>
        </p>
        <p>
        Alle egg starter med `&apos;EGG&#123;`&apos; og slutter med `&apos;&#125;`&apos; <br/>
        Finner du et egg kan du åpne det med å putte egget i feltet under og trykke `&apos;Åpne egg`&apos;. Du vil da
          få tilbake en bokstav. Bokstavene danner tilslutt løsningsordet i denne påskejakten.
        </p>
        <input type="text" value={egg} onChange={handleChange}  />
        <button onClick={handleSubmit}>Åpne egg</button>
        {bokstav && <div>{bokstav}</div>}

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Egg #2 &rarr;</h2>
            <p>
              Det finnes ett flagg til på denne siden.
              Men da må du kikke i kilden med feks. Ctrl-Shift J (Developer tools)
            </p>
          </div>

          <div className={styles.card}>
            <h2>Egg #3 &rarr;</h2>
            <p>Flagget er i feltet under. Men html typen er passord så det vises ikke.
            Kan du gjøre noe med det kanskje? (Developer tools to the rescue)
            </p>
            <input type="password" value={hiddenEgg} readOnly/>
          </div>

          <div className={styles.card}>
            <h2>Egg #4 &rarr;</h2>
            <p>Flagget finner du om du klarer å logge inn med ssh til kali@192.168.1.12 med passord 1234
            </p>
          </div>

          <div className={styles.card}>
            <h2>Egg #5 &rarr;</h2>
            <p>Inne på serveren i oppgave 4 så ligger det en fil som inneholder et egg
            </p>
          </div>

          <div className={styles.card}>
            <h2>Egg #6 &rarr;</h2>
            <p>På samme måte som i oppgave 5, så er det en annen fil som også inneholder et egg.
              Men denne gangen er den litt bedre gjemt. Kansje du kan prøve commandoen strings?
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Første som finner alle eggene får en diplom. Alle som finner alle eggene vil få et påskeegg med gotteri.
      </footer>
    </div>
  )
}
