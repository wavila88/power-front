import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import YouTube from 'react-youtube';
import { youtubeOpt } from '@/src/utils/home.utils';
import Router from 'next/router';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Home() {
  const videoId = 'VB6U6oLtRCE';



  return (
    <>
      <Head>
        <title>inicio</title>
      </Head>
      <div className={styles.principalTitle}>
        Tu poder Especial en menos de 1 minuto!
      </div>


      <div className={styles.youtubeVideo}>
     <YouTube videoId={videoId} opts={youtubeOpt} />

      </div>
        <div className={styles.btnContainer}>
          <Button type='button' className='radius' size='lg' onClick={()=> Router.push('/country')} variant='primary' >Crear poder</Button>
        </div>


    </>
  )
}
