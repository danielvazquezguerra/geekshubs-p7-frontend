import React from 'react'
import './Home.scss';


const Home = () => {
    return (
        <div className="Home">

            <div className="MainLeft">

                <img className="PhotoHome" src='images/danny-leon-skate-03.png'  alt="danny-leon"/>
                {/* <img className="PhotoHome2" src='images/danny-leon-04.png'  alt="danny-leon"/> */}
                {/* <img className="PhotoHome3" src='images/danny-leon-04.png'  alt="danny-leon"/> */}

                


                <div className="RedCaption" />

                <div className="NameCaption">
                    <p>Danny León / Pro-Skater</p>
                </div>
                    <p className="InterView"> El talento de Danny León se gestó en Madrid, ciudad donde nació. 
                    Mientras crecía viendo a otros chavales patinando se fraguó dentro de 
                    él un vínculo muy fuerte con el skateboarding.</p>

            </div>

            <div className="MainRight">

                <img className="SkateBoard2" src="images/pny30.png" alt=""/>
                
                <p className="DescriptionHome"> <span>The 22" Stone Forest</span> Was inspired by our desire for adventure
                     and wanderlust and focuses on earthy tones of the natural environment. 
                     Let your individual style do the talking and get lost in the outdoors with these neutral colors.</p>
                     
                <img className="Skateboard" src='images/pny20.png' alt=""/>

            </div>
            
        </div>
    )
}

export default Home;
