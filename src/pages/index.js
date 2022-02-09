import React from "react"
import Layout from "../components/Layout"
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa'
import '../styles/index.css'

export default function Home() {
  return (
    <Layout>
      <section className='flex-center-column'>
        <section className="title flex-center-column">
          <div class="me"></div>
          <h1>Liam O'Donnell</h1>
        </section>
        <section className="links flex-center-column">
          <a className="youtube" href="https://www.youtube.com/channel/UCg7Z9p23feEGEu9JnJPOrrg"><FaYoutube/>Youtube</a>
          <a className="instagram" href="https://www.instagram.com/imliamodonnell/"><FaInstagram/>Instagram</a>
          <a className="twitter" href="https://twitter.com/imliamodonnell"><FaTwitter/>Twitter</a>
        </section>
      </section>
    </Layout>
  )
}