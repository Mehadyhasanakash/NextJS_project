import Image from 'next/image'
import styles from './page.module.css'
import Herosection from './componets/Herosection'

export default function Home() {
  return (
    <>
    <Herosection title={"lets Movie Watch Together"} imageUrl ={"/home.svg"}/>
    </>
  )
}
