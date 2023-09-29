import white_logo from '../images/white_logo.png'
import { useState } from 'react'

const Navigation = () => {

    const [ham, setHam] = useState(true)

    function handleClick (){
        setHam(
            !ham
        )
    }

    return (
        <div>
            <Container>
                <img
                    src={white_logo}
                    alt="s4d"
                    className='w-8'
                />
                <Hamburger click={handleClick} init={ham} setter={setHam}/>
            </Container>
            <Menu click={handleClick} init={ham} setter={setHam} />
        </div>
    )
}

export default Navigation

function Container ({ children }){
    return (
        <div className="wrapper fixed w-[100vw] flex items-center justify-between text-white bg-footer-blue py-3 px-8 shadow-2xl z-20">
            {children}
        </div>
    )
}

function Hamburger ({ click, init }){

    return (
        init ? (
        <div className="ham-container cursor-pointer py-5" 
            onClick={click}
        >
            <div className="bar bg-white w-12 h-1 rounded-lg transition-all"></div>
            <div className="bar bg-white w-12 h-1 my-2 rounded-lg transition-all"></div>
            <div className="bar bg-white w-12 h-1 rounded-lg transition-all"></div>
        </div>
        ) :
        (
        <div className="ham-container cursor-pointer py-8" 
            onClick={click}
        >
            <div className="bar rotate-45 bg-white w-12 h-1 rounded-lg transition-all"></div>
            <div className="bar hidden bg-white w-12 h-1 my-2 rounded-lg transition-all"></div>
            <div className="bar -rotate-45 -translate-y-1 bg-white w-12 h-1 rounded-lg transition-all"></div>
        </div>
        )
    )
}

function Menu ({ init }) {

    let keygen = 0

    const items = menu.map(item => (
        <li key={keygen++} className='font-bold font-workSansReg text-xl py-2 text-center hover:bg-button-blue hover:text-white transition-all cursor-pointer'>
            <a href={item.link}>{item.title}</a>
        </li>
    ))    

    return (
        init ? (
            
            <div className="menuContainer fixed top-[78px] w-[100vw] bg-slate-100 z-10 py-10 -translate-y-96 transition-all duration-500 ">
            <ul>
                {items}
            </ul>
        </div>
            ) : (
                <div className="menuContainer fixed top-[78px] w-[100vw] bg-slate-100 z-10 py-10 translate-y-[18px] transition-all duration-500">
            <ul>
                {items}
            </ul>
        </div>
            )
    )
}

// menu items

const menu = [
    {title: 'about', link:'/about'},
    {title: 'experience', link:'/experience'},
    {title: 'projects', link:'/projects'},
    {title: 'contact', link:'/contact'}
]