import React from 'react';
import { 
  KeyboardAvoidingView, 
  Alert,
  Image, 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
} from 'react-native';
import Button from '../components/Button';

const poster = require('../../assets/images/poster.png');

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: "Регистрация"    
  };

  state = {
    name: "",
    email: ""
  }

  nameInputRef = null;
  emailInputRef = null;

showAlert = () => {
  const {name, email} = this.state;
  Alert.alert(
    `${name}, поздравляем с регистрацией!`, // Заголовок
    `На почту ${email} было отправлено приглашение` // Подпись
  );
}

  // Скрывает клавиатуру
  blurFields = () => {
    this.nameInputRef.blur();
    this.emailInputRef.blur();
  }

  handleSubmit = () => {
    this.showAlert();
    this.blurFields();
    this.setState({
      name: "",
      email: ""
    })
  }

  render() {
    const { name, email } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image source={poster} style={styles.image} resizeMode="cover"/>
        <View style={styles.containerContent}>

          <Text style={styles.label}>Имя</Text>
          <TextInput
            placeholder="Имя"
            style={styles.input}
            value={name}
            returnKeyType="next"
            ref={ref => this.nameInputRef = ref}
            onChangeText={(val) => this.setState({name: val})}
            onSubmitEditing={() => this.emailInputRef.focus()}
          />

          <Text style={styles.label}>Почта</Text>
          <TextInput 
            placeholder="Почта"
            style={styles.input}
            value={email}
            returnKeyType="send"
            keyboardType="email-address"
            ref={ref => this.emailInputRef = ref}
            onChangeText={(val) => this.setState({email: val})}
            onSubmitEditing={this.handleSubmit}
          />

        </View>
        <Button text="Зарегистрироваться" onPress={this.handleSubmit} />
      </KeyboardAvoidingView>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerContent: {
    flex: 10,
    padding: 16
  },
  image: {
    flex: 3,
    width: "100%",
  },
  label: {
    fontSize: 12,
    color: "#333333",
    marginTop: 4,
  },
  input: {
    padding: 8,
    marginTop: 6,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 3
  }
});

export default RegisterScreen;