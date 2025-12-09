//using class based component
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: "example",
      location: "example",
      avatar_url:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sankalita-26");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl rounded-2xl p-8 border border-blue-200 text-center hover:scale-[1.02] transition-all duration-300">
        <img
          className="w-36 h-36 mx-auto rounded-full border-4 border-white shadow-md"
          src={avatar_url}
          alt="profile"
        />

        <h1 className="text-3xl font-extrabold text-gray-800 mt-6">
          👨‍💻 Developer: <span className="text-blue-600">{name}</span>
        </h1>

        <h3 className="text-lg text-gray-600 mt-1">
          📍 Location: <span className="font-semibold">{location}</span>
        </h3>

        <h4 className="mt-4 text-gray-700 font-medium">
          Reach out:{" "}
          <span className="text-blue-500 font-semibold">
            monlearning24@gmail.com
          </span>
        </h4>

        <button className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg transition-all duration-200">
          🚀 Connect on GitHub
        </button>
      </div>
    );
  }
}

export default UserClass;
