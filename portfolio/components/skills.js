import { SunIcon, StarIcon } from '@chakra-ui/icons';
import { Image,Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import SectionHeading from "./SectionHeading"

export default function Skills() {

    useEffect(() => {
        const planets = document.querySelectorAll('.planet')
        var p_radii = new Array(10)
        if(window.innerWidth < 450)
        {
            p_radii = [110,110,110,110,200,200,200,300,300,300]
            
        }
        else{
            p_radii = [220,220,220,220,330,330,330,450,450,450]
        }
        let p_radians = new Array(8)
        p_radians[0] = 0;
        p_radians[1] = 2;
        p_radians[2] = 4;
        p_radians[3] = 5;
        p_radians[4] = 0;
        p_radians[5] = 2;
        p_radians[6] = 4;
        p_radians[7] = 0;
        p_radians[8] = 2;
        p_radians[9] = 4;

        const p_velocities = [1.607,1.607,1.607,1.607,1,1,1,0.802,0.802,0.802]

        const p_orbits = document.querySelectorAll('.p-orbit')

        p_orbits.forEach((p_orbit,index)=>{
            p_orbit.style.height = `${p_radii[index]}px`
            p_orbit.style.width = `${p_radii[index]}px`
        })
          
        setInterval(() =>{
          planets.forEach((planet,index)=>{
            planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]}px`
            planet.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}px`
            if(index == 4 || index == 5 || index == 6)
            {
                p_radians[index] -= p_velocities[index] * 0.007
            }
            else{
                p_radians[index] += p_velocities[index] * 0.007
            }
                
            
          })
        },1000/60)
      }, [])

    return(
        <section id="skills">
            <SectionHeading title="My universe of languages"/>
            <Box className="universe">
            
            <SunIcon className="object" id="sun" color="brand.500"/>
                <Image className="object planet" id="js" src="https://img.icons8.com/dusk/64/000000/javascript-logo.png" alt="js"/>
                <Image className="object planet" id="html" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html"/>
                <Image className="object planet" id="css" src="https://img.icons8.com/dusk/64/000000/css3.png" alt="css"/>
                <Image className="object planet" id="php" src="https://img.icons8.com/dusk/64/000000/php-logo.png" alt="php"/>
                <Image className="object planet" id="csharp" src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" alt="csparp"/>
                <Image className="object planet" id="psql" src="https://img.icons8.com/color/48/000000/postgreesql.png" alt="psql"/>
                <Image className="object planet" id="mysql" src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="mysql"/>
                <Image className="object planet" id="react" src="https://img.icons8.com/plasticine/100/000000/react.png" alt="react"/>
                <Image className="object planet" id="ruby" src="https://img.icons8.com/color/48/000000/ruby-programming-language.png"alt="ruby"/>
                <Image className="object planet" id="kotlin" src="https://img.icons8.com/color/48/000000/kotlin.png" alt="kotlin"/>
                
                

                <div className='object p-orbit'></div>
                <div className='object p-orbit'></div>
                <div className='object p-orbit'></div>
                <div className='object p-orbit'></div>
                <div className='object p-orbit'></div>
                <div className='object p-orbit'></div>
                <div className='object p-orbit'></div>
                <div className='object p-orbit'></div>
                <div className='object p-orbit'></div>
                <div className='object p-orbit'></div>

            </Box>
           
        </section>
    )
}
