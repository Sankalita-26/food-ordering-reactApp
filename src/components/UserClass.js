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
      <div className="max-w-md w-full mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl rounded-2xl p-8 sm:p-10 text-center space-y-6 hover:scale-[1.01] transition-all duration-300">
        
        <img
          className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md object-cover"
          src={avatar_url}
          alt="Profile"
        />

        <h1 className="text-3xl font-extrabold text-gray-800">
          👨‍💻 {name}
        </h1>

        <h3 className="text-lg text-gray-600 font-medium">
          📍 {location}
        </h3>

        <h4 className="text-gray-700 font-semibold">
          📧 Reach out: 
          <span className="text-blue-600"> monlearning24@gmail.com</span>
        </h4>

        <a
          href="https://github.com/sankalita-26"
          target="_blank"
          className="inline-block bg-gray-900 text-white px-6 py-2 mt-2 rounded-xl hover:bg-black transition shadow-md font-semibold"
        >
          🔗 View GitHub Profile
        </a>
      </div>
    );
  }
}

export default UserClass;
