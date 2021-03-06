import {
  Button,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Text,
  View
} from "native-base";
import React from "react";
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, logout, toggleViewDeletedPoneys, loadPoneys } from "../actions";

class HeaderButtonsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      inputUserName: "admin",
      inputPassword: "123456"
    };
  }

  closeLoginModal = () => {
    this.setState({ modalVisible: false });
  };

  openLoginModal = () => {
    this.setState({ modalVisible: true });
  };

  handleLogin = () => {
    this.closeLoginModal();
    if (
      this.state.inputUserName === "admin" &&
      this.state.inputPassword === "123456"
    ) {
      this.props.login({ name: this.state.inputUserName });
    } else {
      Alert.alert("Erro", "Credenciais inválidas", [{ text: "ok" }]);
    }
  };

  handleLogout = () => {
    Alert.alert(
      "Logout",
      this.props.profile.user.name + ", confirma o logout?",
      [
        { text: "Sim", onPress: this.props.logout },
        { text: "Não", style: "cancel" }
      ],
      { cancelable: false }
    );
  };

  renderLoginModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.closeLoginModal}
      >
        <View>
          <Form>
            <Item floatingLabel>
              <Label>Usuário</Label>
              <Input
                autoCapitalize="none"
                onChangeText={inputUserName => this.setState({ inputUserName })}
                value={this.state.inputUserName}
              />
            </Item>
            <Item floatingLabel last style={{ marginBottom: 20 }}>
              <Label>Senha</Label>
              <Input
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={inputPassword => this.setState({ inputPassword })}
                value={this.state.inputPassword}
              />
            </Item>
            <Button
              full
              primary
              style={{ marginBottom: 20 }}
              onPress={this.handleLogin}
            >
              <Text>Login</Text>
            </Button>
            <Button full light onPress={this.closeLoginModal}>
              <Text>Cancelar</Text>
            </Button>
          </Form>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.HeaderButtonContainer}>
        <TouchableOpacity transparent onPress={this.props.loadPoneys}>
          <Icon
            style={[
              { color: "blue" },
              styles.headerIconFont,
              styles.headerIconMargin
            ]}
            name="refresh"
          />
        </TouchableOpacity>
        <Button transparent onPress={this.props.toggleViewDeletedPoneys}>
          <Icon
            style={[styles.headerIconFont, styles.headerIconMargin]}
            name={this.props.poneys.viewDeleted ? "eye-off" : "eye"}
          />
        </Button>

        {this.props.profile.user ? (
          <View style={styles.HeaderButtonContainer}>
            <Button transparent>
              <Icon
                style={[styles.headerIconFont, styles.headerIconMargin]}
                name="add"
                onPress={() => this.props.navigation.navigate("AdicionarPoney")}
              />
            </Button>
            <Button transparent onPress={this.handleLogout}>
              <Image
                style={styles.headerIconMargin}
                source={require("../assets/admin.png")}
              />
            </Button>
          </View>
        ) : (
          <Button transparent onPress={this.openLoginModal}>
            <Icon
              style={[styles.headerIconFont, styles.headerIconMargin]}
              name="contact"
            />
          </Button>
        )}
        {this.renderLoginModal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HeaderButtonContainer: {
    flex: 1,
    flexDirection: "row"
  },
  headerIconMargin: {
    marginLeft: 10,
    marginRight: 10
  },
  headerIconFont: {
    fontSize: 35
  }
});

HeaderButtonsComponent.propTypes = {
  profile: PropTypes.object,
  poneys: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func,
  toggleViewDeletedPoneys: PropTypes.func,
  navigation: PropTypes.object,
  loadPoneys: PropTypes.func
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    poneys: state.poneys
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { login, logout, toggleViewDeletedPoneys, loadPoneys },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderButtonsComponent);
