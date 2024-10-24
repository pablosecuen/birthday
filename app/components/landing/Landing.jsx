'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import medusa from '../../assets/medusaimg/medusagreen.png';
import slogan from '../../assets/slogan/slogan.png';
import columns from '../../assets/medusaimg/columns.png';
import Button from '../button/Button';

function Landing() {
  useEffect(() => {
    const Atropos = require('atropos').default; // Import Atropos library dynamically

    const myAtropos = Atropos({
      el: '.my-atropos',
      activeOffset: 30,
      shadowScale: 1.05,
      onEnter() {
        /*    console.log("Enter"); */
      },
      onLeave() {
        /*  console.log("Leave"); */
      },
      onRotate(x, y) {
        /*        console.log("Rotate", x, y); */
      },
    });
  }, []);

  return (
    <>
      {/* medusa */}
      <div className='flex min-h-screen w-full top-20 items-center justify-center  relative'>
        <h1 className='card absolute z-40 top-0 font-elektra tracking-widest text-xl md:text-3xl flex text-yellow-300 text-center'>
          <p> SAVE THE DATE</p> <p className=' font-bold px-2'>19 agosto</p>
        </h1>{' '}
        <div className=' flex justify-center w-screen items-center align-middle drop-shadow-sm  absolute -top-56 md:top-0'>
          <div className='atropos my-atropos w-screen flex mt-20 sm:mt-0 sm:ml-0 '>
            {/* <!-- scale container (required) --> */}
            <div className='atropos-scale w-screen flex'>
              {/* <!-- rotate container (required) --> */}

              <div className='atropos-rotate w-screen flex'>
                {/* <!-- inner container (required) --> */}

                <div className='atropos-inner w-full relative flex bg-space -ml-32 bg-cover bg-no-repeat bg-center  mt-24 sm:mt-0'>
                  {/* <!-- put your custom content here --> */}

                  <Image
                    src={columns}
                    alt='columns'
                    width={800}
                    height={800}
                    className='medusa top-24 absolute w-[450px] left-60 sm:left-[220px] h-[400px] md:h-[600px]  sm:pl-0 contrast-200 brightness-50 sm:w-[800px] md:left-24 '
                    data-atropos-offset='5'
                  />

                  <Image
                    src={medusa}
                    alt='medusa'
                    width={500}
                    height={600}
                    className='medusa top-24 absolute pl-4 left-[300px] sm:left-68 ld:left-64 w-80  lg:w-[500px] sm:pl-0  '
                    data-atropos-offset='16'
                  />

                  <Image
                    src={slogan}
                    alt='slogan'
                    width={500}
                    height={600}
                    className='card  absolute bottom-96 left-[300px]  sm:left-52 w-80  ml-4   sm:w-auto sm:ml-0 sm:bottom-40 '
                    data-atropos-offset='22'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button className='mobile-button' />
    </>
  );
}
export default Landing;
