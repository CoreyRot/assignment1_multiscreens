import React from 'react';
import { Text, View, ScrollView, StyleSheet,
  Platform, Image, Component } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { TabBarBottom, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Header, Title, Container, Footer, Button, Icon, Content, Card, CardItem, InputGroup, Input, Thumbnail } from 'native-base';


class HomeScreen extends React.Component {
  render() {
    return (
    <Container>
    <Header style={{ flex: 1, paddingBottom: 15 }}>
    <Title style={{ color: '#fff', fontSize: 25, paddingTop: 10 }}>Instagram</Title>
    </Header>
    <Content>
    <ScrollView>
    
    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{ width: 680, height: 800, alignItems: 'center' }} source={require('./assets/2.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>
    
    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{ width: 680, height: 800, alignItems: 'center' }} source={require('./assets/3.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>

    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{ width: 680, height: 800, alignItems: 'center' }} source={require('./assets/7.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>

    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{ width: 680, height: 800, alignItems: 'center' }} source={require('./assets/6.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>

    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{  width: 680, height: 800, alignItems: 'center' }} source={require('./assets/1.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>

    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{ width: 680, height: 800, alignItems: 'center' }} source={require('./assets/8.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>

    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{width: 680, height: 800, alignItems: 'center' }} source={require('./assets/10.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>

    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{ width: 680, height: 800, alignItems: 'center' }} source={require('./assets/9.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>
    
    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{ width: 680, height: 800, alignItems: 'center' }} source={require('./assets/4.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>
    
    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{ width: 680, height: 800, alignItems: 'center' }} source={require('./assets/11.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>
    
    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{ width: 680, height: 800, alignItems: 'center' }} source={require('./assets/5.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>

    <Card style ={{ marginLeft: 400, marginRight: 400 }}>
    <CardItem>
    <Icon name="ios-contact"/>
    <Text>Username</Text>
    </CardItem>
    <CardItem>
    <Image style={{ width: 680, height: 800, alignItems: 'center' }} source={require('./assets/12.jpg')} />
    </CardItem>
    <CardItem style={{ alignItems: 'baseline' }}>
    <Icon name="ios-heart"/>
    <Icon name="ios-document"/>
    </CardItem>
    <CardItem>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </CardItem>
    </Card>
    
    </ScrollView>
    </Content>
    </Container>
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    return (
      <Container>
      <Header style={{ flex: 1, paddingBottom: 15 }}>
      <Title style={{ color: '#fff', fontSize: 25, paddingTop: 10 }}>Search</Title>
      </Header>
      <Content>
      <InputGroup borderType="rounded" style={{ marginLeft: 400, marginRight: 400 }} >
      <Icon name= "ios-search" />
      <Input style={{color: 'black'}} />
      </InputGroup>
      <ScrollView>

      <Card style ={{ marginLeft: 300, marginRight: 300, alignItems: 'center' }}>
      <CardItem>
      <Image style={{ width: 880, height: 380, alignItems: 'center' }} source={require('./assets/10.jpg')} />
      </CardItem>
      </Card>
      
      <Card style ={{ marginLeft: 300, marginRight: 300, alignItems: 'baseline' }}>
      <CardItem style ={{ marginLeft: 15, alignItems: 'center' }}>
      <Image style={{ width: 280, height: 280 }} source={require('./assets/3.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/7.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/6.jpg')} />
      </CardItem>

      <CardItem style ={{ marginLeft: 15, alignItems: 'center' }}>
      <Image style={{ width: 280, height: 280, alignItems: 'center' }} source={require('./assets/1.jpg')} />
      <Image style={{ width: 280, height: 280, alignItems: 'center' }} source={require('./assets/8.jpg')} />
      <Image style={{ width: 280, height: 280, alignItems: 'center' }} source={require('./assets/2.jpg')} />
      </CardItem>
  
      <CardItem style ={{ marginLeft: 15, alignItems: 'center' }}>
      <Image style={{ width: 280, height: 280 }} source={require('./assets/9.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/4.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/12.jpg')} />
      </CardItem>

      </Card>

      </ScrollView>
      </Content>
      </Container>
     );
   }
 }

 class ProfileScreen extends React.Component {
   render() {
     return (
      <Container>
      <Header style={{ flex: 1, paddingBottom: 15 }}>
      <Title style={{ color: '#fff', fontSize: 25, paddingTop: 10 }}>Username</Title>
      </Header>
      <Content>
      <ScrollView>
      <Card style ={{ marginLeft: 300, marginRight: 300, DecorationLine: 'underline' }}>
      <CardItem>
      <Thumbnail style={{ width: 120, height: 120 }} source={require('./assets/placeholder-profile-sq.jpg')} />
      <CardItem>
      <Text>Username</Text>
      </CardItem>
      <CardItem>
      <Button style={{ marginLeft: 200, marginRight: 180, backgroundColor: 'white' }} >
      <Input placeholder="Edit Profile" style={{color: 'black' }} />
      </Button>
      <Icon name="ios-settings"/>
      </CardItem>

      </CardItem>
      </Card>

      <CardItem style ={{ marginLeft: 720, marginRight: 0, alignItems: 'center' }}>
      <Icon name="ios-albums"/>
      </CardItem>

      <Card style ={{ marginLeft: 300, marginRight: 300, alignItems: 'baseline' }}>
      <CardItem style ={{ marginLeft: 15, marginLeft: 15,  alignItems: 'center' }}>
      <Image style={{ width: 280, height: 280 }} source={require('./assets/3.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/7.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/6.jpg')} />
      </CardItem>

      <CardItem style ={{ marginLeft: 15,  marginRight: 15, alignItems: 'center' }}>
      <Image style={{ width: 280, height: 280 }} source={require('./assets/1.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/8.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/2.jpg')} />
      </CardItem>
  
      <CardItem style ={{ marginLeft: 15,  marginRight: 15, alignItems: 'center' }}>
      <Image style={{ width: 280, height: 280 }} source={require('./assets/9.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/4.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/12.jpg')} />
      </CardItem>

      <CardItem style ={{ marginLeft: 15,  marginRight: 15, alignItems: 'center' }}>
      <Image style={{ width: 280, height: 280 }} source={require('./assets/5.jpg')} />
      <Image style={{ width: 280, height: 280 }} source={require('./assets/11.jpg')} />
      </CardItem>


      </Card>

      </ScrollView>
      </Content>
      </Container>
     );
   }
 }

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: false,
  }
));

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
