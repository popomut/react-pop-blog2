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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";



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

  this.props.history.push('/showArticle/'+id)

}



  componentDidMount() {

  }



  render() {
    //classes = useStyles();

    var dataEntries = this.props.data;

    const { classes } = this.props;

    const items = []


    for(var key in dataEntries){
 

      console.log('test test =====================================');
      console.log("key "+ key);
      //console.log(dataEntries.length);
      var imageInBase64 = dataEntries[key].files[0].base64;
      //console.log(test);

    items.push(

        <div id="card" class="card" onClick={this.handleClickCard.bind(this,key)}>
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
        <div>
            <Link to="/showArticle" className="btn btn-primary">Read</Link>
         </div>

      </CardActions>
          </Card>
        </div>
    )


}

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

export default withRouter(withStyles(styles, { withTheme: true })(ArticleCard));
