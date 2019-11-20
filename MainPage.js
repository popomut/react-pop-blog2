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
      .once("value")
      .then(snapshot => {
        const key = snapshot.key;
        const val = snapshot.val();
        //console.log(val);

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
