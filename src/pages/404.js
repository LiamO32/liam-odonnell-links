import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
        <section className='flex-center full-screen-height'>
            <h1>404</h1>
            <p>Sorry, that page doesn't exist</p>
        </section>
    </Layout>
  )
}
