import React from 'react';
import { connect } from 'react-redux';
import {add} from './action';


const App = (props) => {
  return (
   <div>
    <h2>Redux State counter </h2>
      <pre>{JSON.stringify(props.reduxState, null, 5)}</pre>

      <button onClick={() => {props.add()}}>Click to Count</button>
   </div>
  );

}

const mapStateToProp = (state) => {
  return {
    reduxState: state
  }

}

export default connect(mapStateToProp, {add: add}) (App)