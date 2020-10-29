import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uriOne: require('./src/images/dice1.png'),
      uriTwo: require('./src/images/dice1.png'),
    };
  }

  generatingRandomNumberOne = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  generatingRandomNumberTwo = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  generatingRandomDice = () => {
    let diceNumberOne = this.generatingRandomNumberOne();
    let diceNumberTwo = this.generatingRandomNumberTwo();
    switch (diceNumberOne) {
      case 1:
        this.setState({uriOne: require('./src/images/dice1.png')});
        break;
      case 2:
        this.setState({uriOne: require('./src/images/dice2.png')});
        break;
      case 3:
        this.setState({uriOne: require('./src/images/dice3.png')});
        break;
      case 4:
        this.setState({uriOne: require('./src/images/dice4.png')});
        break;
      case 5:
        this.setState({uriOne: require('./src/images/dice5.png')});
        break;
      case 6:
        this.setState({uriOne: require('./src/images/dice6.png')});
        break;

      default:
        break;
    }
    switch (diceNumberTwo) {
      case 1:
        this.setState({uriTwo: require('./src/images/dice1.png')});
        break;
      case 2:
        this.setState({uriTwo: require('./src/images/dice2.png')});
        break;
      case 3:
        this.setState({uriTwo: require('./src/images/dice3.png')});
        break;
      case 4:
        this.setState({uriTwo: require('./src/images/dice4.png')});
        break;
      case 5:
        this.setState({uriTwo: require('./src/images/dice5.png')});
        break;
      case 6:
        this.setState({uriTwo: require('./src/images/dice6.png')});
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.textStyle}>Let's Roll The Dice</Text>
        <View style={Styles.diceContainer}>
          <Image style={Styles.imageStyle} source={this.state.uriOne} />
          <Image style={Styles.imageStyle} source={this.state.uriTwo} />
        </View>
        <TouchableOpacity onPress={this.generatingRandomDice}>
          <Text style={Styles.diceButt}>Roll</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  textStyle: {
    fontSize: 50,
    color: '#FFFFFF',
    marginTop: 50,
  },
  diceButt: {
    fontSize: 30,
    backgroundColor: '#badc57',
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 150,
    borderRadius: 10,
    color: '#FFFFFF',
    borderWidth: 1,
    borderBottomColor: '#DAE0E2',
    borderRightColor: '#DAE0E2',
  },
  imageStyle: {
    marginTop: 200,
    marginHorizontal: 20,
    height: 150,
    width: 150,
  },
  diceContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
