import React from "react"
import characterHome from "../assets/xmen.png"

const Home = () => {

    return(
    

    
              <div>
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-3">Welcome to Character Tinder</h1>
                    <p className="lead">
                      It's like Tinder, but for Characters!
                    </p>
                    <img
                      src={characterHome}
                      alt="fluffy gray character with sunglasses"
                      className="character-home"
                    />
                  </div>
                </div>
              </div>
            )
          }
       
        


export default Home