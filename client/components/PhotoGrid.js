import React from 'react';
import Photo from './Photo';
import axios from 'axios';
import connect from 'react-redux'
const PhotoGrid = React.createClass({

dataGetter(cb) {
    axios
      .get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(response => response.data)
      .then(stuuf => {
        let dataPPics =[]
            stuuf.data.forEach(function(element) {

              dataPPics.push(element.images.original_still.url);
            });

       cb(dataPPics);    
      });

},
  
render() {
  let data = this.dataGetter(function(pic){
      console.log(pic);
     
  });
    return <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>;



  }
});

//export default connect(MapStateToProps,{Actions})(PhotoGrid)

export default PhotoGrid;
