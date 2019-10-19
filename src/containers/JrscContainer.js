import React from "react";
import { Jrsc } from "../components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as jrscAction from "../actions/Jrsc";
import { showDetail } from "../lib/RouterHelper";

class JrscContainer extends React.Component {
    constructor(props) {
        super(props);
        this.changeJrShici = this.changeJrShici.bind(this);
        this.collectJrShici = this.collectJrShici.bind(this);
        this.insertShici = this.insertShici.bind(this);
        this.prevJrShici = this.prevJrShici.bind(this);
        this.nextJrShici = this.nextJrShici.bind(this);
        this.jrShiciDetail = this.jrShiciDetail.bind(this);
    }
    changeJrShici() {
        this.props.changeJrShici();
    }
    insertShici(shici) {
        this.props.insertShici(shici);
    }
    collectJrShici(index) {
        this.props.collectJrShici(index);
    }
    prevJrShici(index) {
        this.props.prevJrShici(index);
    }
    nextJrShici(index) {
        this.props.nextJrShici(index);
    }
    jrShiciDetail(jrshici) {
        this.props.jrShiciDetail(jrshici);
        showDetail("detail");
    }
    componentDidMount() {
        this.props.fetchJrShici({ type: "INSERT_JR_SHICI" });
    }
    render() {
        const { jrshiciData, allJrShiciList } = this.props;
        const { orderNumber } = jrshiciData;
        return (
            <Jrsc
                jrshiciData={jrshiciData}
                allJrShiciList={allJrShiciList}
                changeJrShici={this.changeJrShici}
                collectJrShici={this.collectJrShici}
                insertShici={this.insertShici}
                showPrevButton={orderNumber > 0}
                showNextButton={orderNumber < allJrShiciList.length - 1}
                prevJrShici={this.prevJrShici}
                nextJrShici={this.nextJrShici}
                jrShiciDetail={this.jrShiciDetail}
            />
        );
    }
}

const mapStateToProps = state => state.Jrsc;

function mapDispatchToProps(dispatch) {
    return bindActionCreators(jrscAction, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JrscContainer);
