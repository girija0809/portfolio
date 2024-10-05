import React from 'react'
import mahadev from "../mahadev.jpeg"
import { Twitter } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Github } from 'lucide-react'

function Hero() {
  return (
    <div className='flex items-center gap-20 py-24'>
        <img src={mahadev} />
        <div className=''>
            <p className='font-bold text-3xl'> <a className='text-emerald-400'>Hey, I'm Girija Rayala.</a> I'm a Full Stack Developer.</p>
            <div className='flex gap-8 py-5'> 
                <a className='flex items-center hover:text-sky-600'><Twitter />Twitter</a>
                <a  className='flex items-center hover:text-pink-600'> <Instagram /> Instagram </a>
                <a className='flex items-center hover:text-sky-600' > <Linkedin /> Linkedin </a>
                <a className='flex items-center hover:text-gray-600'> <Github /> Github </a>
            </div>
        </div>  
    </div>
  )
}

export default Hero;