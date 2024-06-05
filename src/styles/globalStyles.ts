import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const globalStyles = StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#212121',
    flex: 0,
  },

  section: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  row: {
    flexDirection: 'row',
  },

  inputContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 1,
    minHeight: 48,
    borderColor: colors.gray200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shadow: {
    shadowColor: 'rgba(0,0,0,0.35)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },

  input: {
    padding: 0,
    margin: 0,
    color: '#0F1414',
    fontSize: 14,
    flex: 1,
  },
  button: {
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  // borderBottom: {
  //   borderBottomColor: colors.gray70,
  //   borderBottomWidth: 1,
  // },

  tag: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    margin: 4,
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    padding: 16,
    width: '90%',
    // margin: 20,
    borderRadius: 12,
    backgroundColor: 'white',
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },

  listItem: {
    padding: 16,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
});
