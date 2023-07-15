import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nabar() {
  return (
    <div className=" py-4 fixed px-14 bg-white drop-shadow-sm flex justify-between items-center mx-auto w-full">
        <Link href={"/"}>
            <Image
            src={"/logo-Pokemon.png"}
            width={125}
            height={50}
            alt="LogoPokemon"
            />
        </Link>
        <div className="flex gap-5">
            <Link href={"/about"}>About</Link>
            <h1>Blog</h1>
        </div>
    </div>
  )
}
