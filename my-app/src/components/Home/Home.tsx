import React from 'react';
import './Home.css';
import screen from '../../assests/screen.png';
import coding from '../../assests/coding.png'
import user from '../../assests/user.png'


const Home = () => {
    return (
        <div className='home-container'>
            <div className='section'>
                <img className='image' src={screen} alt='users' />
                <p className='paragraph'>EnableIT specializes in helping companies design and implement stable, high performance and easily manageable networks, using open source technologies such as Puppet, Linux, load balancers etc. We are experts in Linux system administration services with over 20 years of experience in operations development (devops), system administration and operations</p>
            </div>
            <div className='section'>
                <img className='image' src={user} alt='user' />
                <p className='paragraph'>Coding is the process of creating instructions that a computer can understand and execute. It involves writing code using a programming language, which is a set of instructions that can be understood by a computer.</p>
            </div>

            <div className='section'>
                <img className='image' src={coding} alt='users' />
                <p className='paragraph'>Coders are professionals who use programming languages to create software, applications, and websites. They are essential to the tech industry and play a vital role in designing and building the digital world that we live in.</p>
            </div>
        </div>
    )
}

export default Home;