    //using class based component
    import React from "react"

    class UserClass extends React.Component{
        constructor(props){
            super(props);


            this.state={
                userInfo:"example",
                location:"example",
                avatar_url: "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80"
                
            };
        };

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/sankalita-26");
        const json= await data.json();

        this.setState({
            userInfo:json,
        });
        console.log(json);
    }
    componentDidUpdate(){
        console.log("Updated");
    }
    componentWillUnmount(){
        console.log("Unmounted");
    }



        render(){

            // const{name,location}=this.props;//best way to use props like this
            // const {count,count1}=this.state;

            const {name,location,avatar_url}=this.state.userInfo;




            return(
        <div className="user-card">
            {/* <button onClick={()=>{
                this.setState(
                    {count:this.state.count+1,}
                )
            }}>Press to increase count</button>
            <h1>count:{count}</h1>
            <h1>count1:{count1}</h1> */}


            <h1>Developer :{name} </h1>
        <h3>location : {location}</h3>
        <img className="profile_img"src={avatar_url}/>
        <h4>Reach out: monlearning24@gmail.com</h4>
        </div>
        )
        }
    }


    export default UserClass;