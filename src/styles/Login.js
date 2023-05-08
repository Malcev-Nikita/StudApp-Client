import { StyleSheet, Dimensions } from 'react-native';

const Login_style = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 56,
    },

    input: {
        width: Dimensions.get('screen').width * 0.9,
        height: 56,
        marginTop: 12,
        marginBottom: 12,
        paddingLeft: 16,
        borderColor: '#F1F1FA',
        borderWidth: 1,
        borderRadius: 16,
        fontWeight: '600'
    },

    container: {
        justifyContent: 'center',
    },

    icon: {
        position: 'absolute',
        right: 21,
    },

    button: {
        width: Dimensions.get('screen').width * 0.9,
        fontWeight: '600',
        fontSize: 18,
        borderRadius: 16,
        backgroundColor: '#146FBE',
        height: 56,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button_text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },

    text_button: {
        color: '#146FBE',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 33,
    }
});

export default Login_style;