import Image from "next/image"
import Link from "next/link"

import styles from '../styles/WantedPerson.module.css'

const wantedPerson = ({ url, title, description, image, classification }) => {
  return (
    <div className={styles.person}>
      <h2>{title}</h2>
      <p>Person classification: {classification}</p>
      <Link href={url} target="_blank">More about {title}</Link>
      <p>{description}</p>
      { image ? <Image src={image} alt="" width={150} height={150} /> : null }
    </div>
  )
}

export default wantedPerson
