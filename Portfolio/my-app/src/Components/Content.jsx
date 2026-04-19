
function Content()
{
    return (
        <div>
            <div className="content_and_profile">
                <div className="content">
                        <h1 className="greet"> Hello there,</h1>
                        <p className="para">This is Ayush Nikalje studying Artificial Intelligence and Data Science at DMCE, Airoli. </p>
                </div>
                <div className="work">
                    <h1> work experience</h1>
                    <p> I have not yet worked at any professional industry but i have a made some pretty impressive projects as a student</p>
                
                </div>
                <div className="skills">
                    <h1>Skills</h1>
                    <ul>                      
                        <li>Programmming languages
                            <ul>
                                <li>Java</li>
                                <li>c/c++</li>
                                <li>python</li>
                            </ul>
                        </li>
                        <li>DSA</li>
                        <li>MERN stack</li>
                    </ul>
                </div>
                <div className="profile">
                    <img  src="./src/assets/pic.png"/>
                </div>  
                <div className="projects">
                    <h1>Projects</h1>
                    <div className="breakpro">                   
                        <div className="majorpro">
                            <h1>Major Projects</h1>
                                <ul>
                                    <li>java p-1</li>
                                    <li>java p-2</li>
                                    <li>portfolio</li>
                                    <li>Movies searching/recommendation app with search optimisation</li>
                                </ul>
                        </div>
                        <div className="smallpro">
                            <h1>Small Projects</h1>
                                <ul>
                                    <li>currency-rate-converter using AIPS</li>
                                    <li>weather checker using APIS</li>
                                    <li>Spotify</li>
                                    <li>Youtube</li>
                                </ul> 
                            </div>                                     
                    
                    </div>
                </div>             
            </div>
        </div>
    )
}
export default Content ;