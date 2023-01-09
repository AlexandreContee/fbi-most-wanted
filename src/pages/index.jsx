import { useEffect, useState } from 'react'
import WantedPerson from '../components/WantedPerson'
import axios from "axios"

import styles from '../styles/Home.module.css'

export default function Home() {

  const [fbiData, setFbiData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [options, setOptions] = useState(
    {
      method: 'GET',
      url: 'https://api.fbi.gov/wanted/v1/list',
      params: {
        page: 1
      }
    }
  )

  useEffect(() => {
    axios.request(options).then(fetch('https://api.fbi.gov/wanted/v1/list'))
      .then((response) => setFbiData(response.data.items))
      .finally(() => {
        setIsLoading(false)
      })
  }, [options])

  const handleClick = () => {
    setIsLoading(true)
    setOptions(
      {
        method: 'GET',
        url: 'https://api.fbi.gov/wanted/v1/list',
        params: {
          page: options.params.page + 1
        }
      }
    )
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerSpaceHold}></div>
      <header>
        <h1>FBI: Most Wanted API</h1>
      </header>
      <main>
        {isLoading ? <div className={styles.loader}></div> : !!fbiData ? (
          fbiData.map((item) => (
            <WantedPerson
              key={item["@id"]}
              description={item.description}
              title={item.title}
              details={item.details}
              image={item.images[2]?.original ? item.images[2]?.original : null}
              url={item.url}
              classification={item.person_classification}
            />
          )))
          : null}
      </main>
      <div id={styles.btn}>
        <button onClick={handleClick}>Next page</button>
      </div>
      <div className={styles.footerSpaceHold}></div>
      <footer>
        <p>Developed by Alexandre Conte &copy;</p>
      </footer>
    </div>
  )
}
