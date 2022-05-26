import {useEfect} from "react"

import { PrismaClient } from "@prisma/client"

import Layout from "../layout/Layout"

export default function Home() {

  return (
    <Layout>
      <h1 className='text-red-500' >Next.js</h1>

    </Layout>
  )
}


