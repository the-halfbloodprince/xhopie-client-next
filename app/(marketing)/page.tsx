import React from 'react'
import Link from 'next/link'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      Welcome to the Xhopie Page

      <Link href="/store">
        <button>Go to the store</button>
      </Link>
    </div>
  )
}

export default Home