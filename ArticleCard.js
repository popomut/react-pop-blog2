import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-mde/lib/styles/css/react-mde-all.css";
import firebase from "./firebase/Firebase";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";


//source page: https://www.npmjs.com/package/react-mde
//https://codesandbox.io/s/vm1k17ymq0

const initialState = {
  value: "test"
};


const styles = theme => ({
  card: {
    maxWidth: 345,
    
  },
  media: {
    height: 140,
    
  }
});


class ArticleCard extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleClickCard = this.handleClickCard.bind(this);

  }


handleClickCard(id){
  alert(id);

}

  componentDidMount() {
    //this.getData();
  }



  render() {
    //classes = useStyles();

    var dataEntries = this.props.data;

    const { classes } = this.props;

    const items = []

    //console.log("dataentrie : " + dataEntries);

    //console.log(dataEntries);

    for(var key in dataEntries){
 

      console.log('test test =====================================');
      //console.log("key "+ key);
      //console.log(dataEntries.length);
      var imageInBase64 = dataEntries[key].files[0].base64;
      //console.log(test);




      //const newArray= test.map(element => element.name);

      //console.log(newArray);
      //console.log(dataEntries[key].files[0].base64);
      //console.log(dataEntries[key].files);



//const myArray = [{x:100}, {x:200}, {x:300}];

//const newArray= dataEntries.map(element => element.x);
//console.log(newArray); // [100, 200, 300]



   //<div key="{key}">
   //<p>{dataEntries[key].title}</p>
   //</div>

    items.push(

        <div id="card" class="card" onClick={this.handleClickCard.bind(this,'1')}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media}
                image={imageInBase64}

                title={dataEntries[key].title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {dataEntries[key].title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {dataEntries[key].value}
                </Typography>
              </CardContent>
            </CardActionArea>
<CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
          </Card>
        </div>
    )


}


/** 
    var listArticles = dataEntries.map((dataEntries) => {

            
            return <div><Chip label={messages} color="trinary"/></div> 
            
          });

*/




    return (
      <div id ="dataDiv">
        <br />
        <br />
        <br />
              
                {items}
              
      </div>
    );
  }
}

//export default ArticleCard;

export default withStyles(styles, { withTheme: true })(ArticleCard);
