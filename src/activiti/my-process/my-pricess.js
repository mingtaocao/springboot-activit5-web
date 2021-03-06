/**
 * 用户启动的流程管理路由
 *
 * @Author: caomt
 * @Date: 2018-12-25 09:57:53
 * @Last Modified by: caomt
 * @Last Modified time: 2019-01-03 10:12:41
 */
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MyStartProcessList from "./myStartProcessList";
import ProcessHis from "./process-his";
import ProcessImg from './ProcessImg'
class MyProcess extends Component {
  static propTypes = {};

  render() {
    return (
      <div style={{ border: "1px solid #e7eaec" }}>
        <Switch>
          <Route
            path={`${this.props.match.path}/list`}
            component={MyStartProcessList}
          />
          <Route
            path={`${this.props.match.path}/detail/:id`}
            component={ProcessHis}
          />
          <Route
            path={`${this.props.match.path}/img`}
            component={ProcessImg}
          />
          <Redirect from="/home/myProcess" to="/home/myProcess/list" />
        </Switch>
      </div>
    );
  }
}

export default MyProcess;
