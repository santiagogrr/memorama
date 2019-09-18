import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const cards = []

cards[0] = require('../assets/flags/dz.png');
cards[1] = require('../assets/flags/eg.png');
cards[2] = require('../assets/flags/es.png');
cards[3] = require('../assets/flags/fr.png');
cards[4] = require('../assets/flags/ge.png');
cards[5] = require('../assets/flags/dz.png');
cards[6] = require('../assets/flags/eg.png');
cards[7] = require('../assets/flags/es.png');
cards[8] = require('../assets/flags/fr.png');


cards.sort( () => Math.random() - 0.5);

var numClick = 0;
var first;
var second;

class Level2 extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      status: [],
      match: [],
      points: 0,
      solution: [],
      newGame: false,
      start: false
    };
  }

  static navigationOptions = {
    title : 'Level 1'
  }

  onPressButton = (index) => {

    numClick = numClick + 1 
    if(numClick == 1)
    {
      first = index;
      //this.setState({ status: !this.state.status})
      if(!this.isSelected(this.state.status, index)){
        this.setState({
          status: this.state.status.concat(index),
        });
      }
      setTimeout(() => {
        this.setState({
        status: this.arrayRemove(this.state.status,index)
      });
        }, 2000);
      
      console.log(this.state.status)
    } else if(numClick == 2)
      {
        numClick = 2
        second = index;
        //this.setState({ status: !this.state.status})
        if(!this.isSelected(this.state.status, index)){
          this.setState({
            status: this.state.status.concat(index),
          });
        }
        setTimeout(() => {
          this.setState({
          status: this.arrayRemove(this.state.status,index)
        });
          }, 2000);

        timer = setTimeout(() => {
          this.control()
          }, 3000);
    }
    else
      alert("only two images will be shown")
  } 

  openAll = () => {
    let sol_array = []
    for (let i = 0; i < cards.length; i++) {
      sol_array.push(
        <View key={i} style={styles.bottomItem}>
          <Image
            source={cards[i]}
            style = {styles.pic}
          />
        </View>); 
    }
    this.setState({
      solution: [...this.state.solution, sol_array],
      newGame: true,
    });

    flipped = []
  }

  control() {
    clearInterval(timer)
    console.log(timer)
    numClick = 0;
    if(cards[second] == cards[first]) {
      this.state.points = this.state.points + 1
      //alert("Match")
      this.setState({
        match: this.state.match.concat(first, second),
      });
    }
    // else
    //   alert("Not match")
  }

  isSelected = (array, index) => {
    if(array.find(tileItem => tileItem === index) )
      return true
    else
      return false  
  }

  arrayRemove(arr, value) {
    return arr.filter((ele) => {
        return ele != value;
    });
 }

 onStart = () => {
  this.setState({
    start: true,
  });
}
  
  render(){
    
    let flipped=[]

    if(numClick == 2)
      this.control()
    
    for (let i = 0; i < 9; i++) {
      flipped.push(
      <View key={i} style={styles.bottomItem}>
        <TouchableOpacity onPress={() => this.onPressButton(i)}>
        <Image
          source={this.isSelected(this.state.status, i) || this.isSelected(this.state.match, i)?  cards[i]: require('../assets/flags/1android.png')}
          style = {styles.pic}
        />
        </TouchableOpacity>
      </View>);
    }
    
    if(this.state.newGame)
      flipped = []

  return (
    <View style={styles.main}>
       <View style={styles.firstrow}>
          <Text style={styles.whiteText}>Memorama</Text>
        </View>
        
        <View style={styles.secondrow}>
          <Text style={styles.subText}>Puntos de {this.props.navigation.state.params.name}: {this.state.points} </Text>
        </View>

        <View style={styles.thirdrow}>  
          {flipped}
          {this.state.solution}
        </View>

        <View style={styles.fourthrow}>
          <TouchableOpacity style={styles.buttonContainer} disabled={this.state.start} onPress={this.onStart} >
            <Text style={!this.state.start ? styles.button: styles.buttondisable }>Iniciar Juego</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} disabled={this.state.newGame} onPress={this.openAll}>
            <Text style={styles.button}>Ver Solucion</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
  };
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    //paddingTop: 10,
  },
  firstrow: {
    height: '7%',
    backgroundColor: "#6262de",
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  secondrow: {
    height: '8%',
    backgroundColor: "#98d2c1",
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  thirdrow: {
    height: '70%',
    backgroundColor: "#556570",
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 10,
  },
  fourthrow: {
    flexDirection: 'row',
    height: '15%',
    backgroundColor: "white",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  subText:{
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  whiteText:{
    fontSize: 22,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Hiragino Sans',
  },
  bottomItem: {
    width: 100,
    height: 100,
    margin: 5,
  },
  pic:{
    height: 75,
    width: 75,
    borderRadius: 30
  },
  buttonContainer:{
    backgroundColor:'#eee',
    margin: 20,
   },
   button:{
     fontSize: 14,
     fontWeight: 'bold',
     padding: 10,
   },
   buttondisable:{
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    opacity: 0.3
  },
  
});

export default Level2;
