import { Component } from "react";
import "./searchBoxStyle.css";
export default class SearchBox extends Component {
  render() {
    const { placeholder, buttonText, onClickHandler, onChangeHandler } =
      this.props;

    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-12">
            <input
              type="search"
              className="searchBox"
              placeholder={placeholder}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="searchButton" onClick={onClickHandler}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
