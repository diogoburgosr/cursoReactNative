import { Text } from "native-base";
import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import MantemPoneyForm from "./MantemPoneyForm";

class AdicionarPoneyScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddPoney = poney => {
    alert("Ponei adicionado: " + JSON.stringify(poney));
    this.props.navigation.navigate("ListarPoneys");
  };

  render() {
    return (
      <MantemPoneyForm
        navigation={this.props.navigation}
        onSubmit={this.handleAddPoney}
      />
    );
  }
}

AdicionarPoneyScreen.propTypes = {
  navigation: PropTypes.object
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdicionarPoneyScreen);
