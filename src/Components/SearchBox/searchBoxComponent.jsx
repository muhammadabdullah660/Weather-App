import { Component } from "react";

export default class SearchBox extends Component {
  render() {
    const { placeholder, buttonText, onClickHandler, onChangeHandler } =
      this.props;

    return (
      <div className="container-fluid">
        <input
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
        <button onClick={onClickHandler}>{buttonText}</button>
      </div>
    );
  }
}
