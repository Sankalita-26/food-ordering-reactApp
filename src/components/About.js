// import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div>
            <h1>This is a Food Delivery app using React</h1>
            <h3>Name of this App is FoodieHut</h3>
            {/* <User name={"Sankalita"} location={"kolkata"}/> */}
            <UserClass name={"Sankalita Nandan"} location={"kalidas singha lane"}/>
        </div>
    );
};

export default About;