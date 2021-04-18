import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textDefaultFont: {
    fontSize: 20,
    fontWeight: 700,
    marginVertical: 7,
    marginHorizontal: 7,
    textAlign: 'center',
    fontFamily: 'Changa One',
    paddingBottom: 7,
    color: '#ff7777',
  },
  count: {
    fontSize: 25,
    fontWeight: 700,
    marginVertical: 7,
    marginHorizontal: 7,
    textAlign: 'center',
    fontFamily: 'Changa One',
    paddingBottom: 7,
    color: '#ffce96',
  },
  container: {
    flex: 1,
    backgroundColor: '#00303b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    marginTop: 30,
    minWidth: 150,
  },
  fightButton: {
    fontSize: 35,
    fontWeight: 700,
    textAlign: 'center',
    fontFamily: 'Changa One',
    paddingBottom: 7,
    color: '#ff7777',
  }
})

export default styles;