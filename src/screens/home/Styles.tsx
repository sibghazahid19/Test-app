import {StyleSheet } from 'react-native';
import Colors from '../../../res/theme/Colors'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  button:
  {
    height:40,
    width:'40%',
    backgroundColor:Colors.blue,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  

  },
  buttonText:
  {
    fontSize: 14,
    fontWeight: 'bold',
    color:Colors.white
  },
  bottomView:
  {
    width:'100%',
    height:65,
    paddingTop:10,
    paddingBottom:20,
    backgroundColor:Colors.transparent
  }
});

