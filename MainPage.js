import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-mde/lib/styles/css/react-mde-all.css";
import firebase from "./firebase/Firebase";
import ArticleCard from "./ArticleCard";


//source page: https://www.npmjs.com/package/react-mde
//https://codesandbox.io/s/vm1k17ymq0

const initialState = {
  value: ""
};

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

  }



  getData(e) {
    firebase
      .database()
      .ref("myblog")
      .limitToLast(3)
      .orderByChild("createDate")
      .once("value")
      .then(snapshot => {
        const key = snapshot.key;
        const val = snapshot.val();

        console.log('print val');
        console.log(val);
        //need to sort result to be DESC
        //https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
        
        this.setState({
          value: val
        });
      })
      .catch(e => {
        console.log("Error fetching data", e);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    //classes = useStyles();

    return (
      <div>
        <br />
        <br />
        <br />
        <ArticleCard data={this.state.value}/>
      </div>
    );
  }
}

export default MainPage;
