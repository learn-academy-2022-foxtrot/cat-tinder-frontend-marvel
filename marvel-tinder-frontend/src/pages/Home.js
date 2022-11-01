import React from "react"
import characterHome from "../assets/marvel.png"

const Home = () => {

    return(
    

    
              <div>
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-3">Welcome to Super Hero Tinder</h1>
                    <p className="lead">
                      It's like Tinder, but for Super Heroes!
                    </p>
                    <img
                      src={characterHome}
                      alt="fluffy gray cat with sunglasses"
                      className="character-home"
                    />
                  </div>
                </div>
              </div>
            )
          }
       
        


export default Home