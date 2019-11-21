import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import TextField from '@material-ui/core/TextField';
import firebase from "./firebase/Firebase";
import FileBase64 from 'react-file-base64';

//source page: https://www.npmjs.com/package/react-mde
//https://codesandbox.io/s/vm1k17ymq0

const initialState = {
  title: "test title",
  value: "**Hello world!!!**",
  tab: "write",
  files: []
};



class MarkdownEditor extends Component {


  constructor(props) {
    super(props);

    this.state = initialState;

    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true
    });

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleValueChange = e => {
    this.setState({
      value: e
    });
  };

  handleTabChange = tab => {
    this.setState({
      tab: tab
    });
  };

  handleTitleChange = title => {
    this.setState({
      title: title.target.value
    });
  };

  handleImagePickerChange = image => {
    this.setState({
      image: image.target.value
    });
  };

  handleImagePickerError = e => {

    console.log(e);
  };


  onSubmit = e => {
    e.preventDefault();

    var title = this.state.title;
    var value = this.state.value;
    var files = this.state.files;
    
    //alert(title);
    //alert(value);

    firebase.database().ref('myblog').push({
        title,
        value,
        files
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })

  };

  getFiles(files){
    console.log(files);
    console.log(files[0].name);
    console.log(files[0].base64);

    this.setState({ files: files })
  }

  render() {
    return (
      <div className="container">
        <br/>
        <br/>
        <br/>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add an article
            </h3>
          </div>
      <form name='myform' onSubmit={this.onSubmit}>
      
      <TextField
          id="outlined-basic"
          className='textField'
          onChange={this.handleTitleChange}
          label="What is article title? Put it here please."

          margin="normal"
          variant="outlined"
        />


        <br/>
        <br/>

        <FileBase64 
        multiple={ true }
        onDone={ this.getFiles.bind(this) } />


        <br/>
        <br/>
        
        <ReactMde
          onChange={this.handleValueChange}
          onTabChange={this.handleTabChange}
          value={this.state.value}
          generateMarkdownPreview={markdown =>
            Promise.resolve(this.converter.makeHtml(markdown))
          }
          selectedTab={this.state.tab}
        />

        <br />
        
        <button type="submit" class="btn btn-success">Post Article</button>
        </form>
        </div>
      </div>
      
    );
  }
}

export default MarkdownEditor;
