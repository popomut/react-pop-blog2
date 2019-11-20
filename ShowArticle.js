import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-mde/lib/styles/css/react-mde-all.css";
import firebase from "./firebase/Firebase";




//source page: https://www.npmjs.com/package/react-mde
//https://codesandbox.io/s/vm1k17ymq0

const initialState = {
  value: ""
};





class ShowArticle extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

  }



  componentDidMount() {
    //this.getData();
  }


  render() {
    //classes = useStyles();

    return (
      <div>
        <br />
        <br />
        <br />
        Show Article
      </div>
    );
  }
  
}

//export default ArticleCard;

export default ShowArticle;
