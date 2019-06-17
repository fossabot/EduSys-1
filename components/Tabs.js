import React, { Component } from "react";
import PropTypes from 'prop-types';

class Tabs extends Component {
  render() {
    return (
      <div className="tabs is-centered is-boxed is-medium">
        <ul>
          <li className="is-active">
            <a>
              <span className="icon is-small">
                <i className="fas fa-user-graduate" />
              </span>
              <span>Students</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small">
                <i className="fas fa-chalkboard-teacher" />
              </span>
              <span>Teachers</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tabs;
