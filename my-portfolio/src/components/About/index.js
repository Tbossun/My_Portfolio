import { useEffect, useState } from 'react'
import {
  faWindows,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
        setLetterClass('text-animate-hover');
        setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && <Loader type="pacman" />}
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>As a highly skilled and motivated full-stack developer,
            I possess expertise in C# and extensive knowledge of the .NET framework and ASP.NET Core.
            I am quiet confident, naturally curious, and perpetually working on improving my skills one design problem at a time.
            My ambition and desire to learn and improve drive me, and I am a fast learner who thrives on challenging and diverse projects.
          </p>
          <p align="LEFT">I am excited about the prospect of contributing my skills and experience to a dynamic team and making a meaningful impact in the industry. To define myself in one sentence, 
            I am a sports fanatic, photography enthusiast, and tech-obsessed individual.</p>
            <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faWindows} color="#DD0031"/>
              
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
