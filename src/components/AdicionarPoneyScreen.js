import { Text } from "native-base";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MantemPoneyForm from "./MantemPoneyForm";
import { bindActionCreators } from "redux";
import { addPoney } from "../actions";

class AdicionarPoneyScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddPoney = poney => {
    this.props.addPoney(poney);
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
  addPoney: PropTypes.func,
  navigation: PropTypes.object
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addPoney }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdicionarPoneyScreen);
