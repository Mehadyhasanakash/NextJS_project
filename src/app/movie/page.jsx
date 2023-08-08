import Link from 'next/link'
import React from 'react'
import styles from'@/app/styles/common.module.css'
import MovieCard from '../componets/MovieCard';

const page = async () => {


  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1a6324afd0msh6568039a6f191cap1a4002jsn8ec44c609a82',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

  
const res = await fetch(url, options)
const data = await res.json();
const main_data = data.titles;
console.log(main_data);




  return (
    <>
      <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>


    </>
  )
}

export default page
