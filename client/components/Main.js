import React from 'react';
import {Link} from 'react-router'; 
import axios from 'axios'



const Main = React.createClass({

  // pullData() {

  //   async function myFirstAsyncFunction() {
  //     // async function fill be loaded!
  //     let response = await fetch('http://api.icndb.com/jokes/random')
  //     let data = await response.json();
  //     // getting data we need
  //     let stuff = await data.value.joke
  //     return stuff
  //   }
  //   myFirstAsyncFunction().then((data)=>{
  //     console.log(data)
  //   });
  // },


  render() {


          return <div>
              <h1>
                <Link to="/">Spir()</Link>
              </h1>
              {React.cloneElement(this.props.children, this.props)}
            </div>;
    // fetch('http://localhost:4000/picture')
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(picture => console.log(picture))
    //   .catch(function(error) {
    //     console.log(error);
    //   });


  }
});

export default Main;