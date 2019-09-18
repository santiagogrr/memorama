
import React, {Component} from 'react';
import { View, Button, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

    static navigationOptions = {
      header : null
    }
    
    onChangeText = (text) => {
      this.setState({
        name: text,
      });
    }


    render() {
      return (
          <View style={styles.main}>
            <View style={styles.firstrow}>
              <Text style={styles.title}>Memorama</Text>
            </View>


            <View style={styles.secondrow}>
              <Text style={{fontSize: 18, color:'#505050', padding: 10}}> Name</Text>
              <TextInput
              style={styles.input}
              placeholder="Type here"
              onChangeText={this.onChangeText}
              value={this.state.name}
              autoCorrect={false}
              />
              {/* <Text> You typed: {this.state.name}</Text> */}
            </View>

            <View style={styles.thirdrow}>
              <Text style={{fontSize: 18, padding: 10}}>Choose a level</Text>
            <Button
              title="Level 1 - Easy"
              onPress={() => this.props.navigation.navigate('Level1',{name: this.state.name})}
              />
              <Button
              title="Level 2 - Medium"
              onPress={() => this.props.navigation.navigate('Level2', {name: this.state.name})}
              />
              <Button
              title="Level 3 - Hard"
              onPress={() => this.props.navigation.navigate('Level3', {name: this.state.name })}
              />
            </View>   
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
    firstrow: {
      height: '15%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#98d2c1',
      paddingTop: 40
    },
    secondrow: {
      height: '40%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    thirdrow: {
      height: '10%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 24,
      fontFamily: 'Hiragino Sans',
      fontWeight: "bold",
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: 150,
      borderBottomWidth: 1,
      fontSize: 18,
      textAlign: 'center'
    }

  });
  

  export default HomeScreen;