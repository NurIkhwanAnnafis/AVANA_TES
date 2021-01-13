import '../../src/styles/App.css';

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchData, selectMenu } from '../stores/actions/app.action';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
      formValues: {}
    };
  }

  componentDidMount(){
    this.props.fetchData();
  }

  handleMenuClick = val => this.props.selectMenu(val);

  renderMenuSidebar = data => {
    const { selected } = this.props.data;
    return data.map(val => val.isShowed && (
      <Fragment>
        <a href="#" className="pl-5 list-group-item list-group-item-action bg-black" onClick={() => this.handleMenuClick(val)}>{val.id}</a>
        {selected && val.childs && this.renderMenuSidebar(val.childs)}
      </Fragment>
    ))
  }

  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-black" id="sidebar-wrapper">
          <h1 className="text-center my-4">AVANA</h1>
          <div className="w-100 text-center">
            <img 
              src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg" 
              alt="" 
              style={{ borderRadius: '50%', width: 100 }} 
            />
            <p>Avriza Bramantyo</p>
          </div>
          <div className="list-group list-group-flush">
            {data.listMenu.map(val => val.isShowed && (
              <Fragment>
                <a href="#" className="list-group-item list-group-item-action bg-black" onClick={() => this.handleMenuClick(val)}>{val.id}</a>
                {data.selected && (data.selected.id === val.id) && val.childs && this.renderMenuSidebar(val.childs)}
              </Fragment>
            ))}
          </div>
        </div>

        <div id="page-content-wrapper" className="bg-dark">
          <nav className="navbar navbar-light bg-dark">
            <div className="w-100 d-flex justify-content-between align-items-center">
              <button className="btn btn-primary">xxxxxxx</button>
              <div>
                <button className="btn btn-primary mr-3">xxxxxxx</button>
                <button className="btn btn-primary">xxxxxxxxx</button>
              </div>
            </div>
            <br />  
            <div className="w-100 d-flex justify-content-between align-items-center mt-2">
              <button className="btn btn-primary">xxxxxxxxxxxxxxxxxx</button>
              <div>
                <button className="btn btn-primary mr-3">xxxxxxxxxxx</button>
                <button className="btn btn-primary">xxxxxxxxxxxxx</button>
              </div>
            </div>
          </nav>

          <div className="container-fluid">
            <div className="d-flex m-3">
              <div className="col-md-6 m-2 border" style={{ height: 300 }} />
              <div className="col-md-6 p-1">
                <div className="d-flex">
                  <div className="col-md-6 m-1 border" style={{ height: 145 }} />
                  <div className="col-md-6 m-1 border" style={{ height: 145 }} />
                </div>
                <div className="d-flex">
                  <div className="col-md-6 m-1 border" style={{ height: 145 }} />
                  <div className="col-md-6 m-1 border" style={{ height: 145 }} />
                </div>
              </div>
            </div>
            <div className="d-flex m-3">
              <div className="col-md-6 m-2 border" style={{ height: 300 }} />
              <div className="col-md-6 m-2 border" style={{ height: 300 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.app
})

export default connect(mapStateToProps, { fetchData, selectMenu })(App);