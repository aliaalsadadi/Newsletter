'use client';
import Image from 'next/image'
import Link from 'next/link'
import Form from './components/Form'
import Layout from './components/Layout'
import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState({
    "subject": '',
    "title": '',
    "idea1": '',
    "idea2": '',
    "idea3": '',
    "quote1": '',
    "quote2": '',
    'question1': ''
  });
  return (
    <main style={{ display: 'flex' }}>
      <Form data={data} setData={setData} />
      <Layout data={data} />
    </main>
  )
}
