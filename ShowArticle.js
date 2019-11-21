import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-mde/lib/styles/css/react-mde-all.css";
import firebase from "./firebase/Firebase";
import MarkdownRenderer from "./MarkdownRenderer";




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

getData(e) {

  var id = this.props.match.params.id;

  firebase
      .database()
      .ref("myblog/" + id)
      .once("value")
      .then(snapshot => {
        const key = snapshot.key;
        const val = snapshot.val();
        //alert(val.value);
        console.log(val.value);

        this.setState({
          value: val.value
        });
      })
      .catch(e => {
        console.log("Error fetching data", e);
      });

/*
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

      */


/*
const ref = firebase.firestore().collection('myblog').doc(id);
    ref.get().then((doc) => {
      if (doc.exists) {

        console.log(doc.data);

        this.setState({
          
          value: doc.data()

        });

      } else {
        console.log("No such document!");
      }
    });

    */


/*
  var ref = firebase.database().ref("myblog");
var query = ref.doc(id).get();
query.once("value", function(snapshot) {
  snapshot.forEach(function(child) {
    console.log(child.key, child.val().bio);
  });
});
*/

//db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()

  }

  componentDidMount() {
    //var id = this.props.match.params.id;
    this.getData();
  }


  render() {
    //classes = useStyles();

    return (
      <div>
        <br />
        <br />
        <br />
        Show Article
        <MarkdownRenderer data={this.state.value}/>
      </div>
    );
  }
  
}

//export default ArticleCard;

export default ShowArticle;
