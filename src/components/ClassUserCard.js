import React from "react";

class ClassUserCard extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props);

    console.log(this.props.name + "child contructor");
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default Location",
      }
    }

  }

  async componentDidMount() {
    console.log(this.props.name + "child component did mount");
    // api call
    const data = await fetch("https://api.github.com/users/Asadali52");
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
    console.log("🚀 ~ ClassUserCard ~ componentDidMount ~ json:", json)
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    // const { name, location, contact } = this.props;
    console.log(this.props.name + "child render");
    const { name, location, company, avatar_url } = this.state.userInfo;

    return (
      <div className='bg-white shadow-sm rounded-xl p-4 max-w-80 border border-gray-300 overflow-clip'>

        <img src={avatar_url} alt="" className="h-[100px] w-[100px] rounded-full mx-auto border-2 border-gray-400" />

        <p className='space-x-2 mt-4'>
          <span className='font-bold'>Name:</span>
          <span className='text-sm'>{name}</span>
        </p>
        <p className='space-x-2'>
          <span className='font-bold'>Location:</span>
          <span className='text-sm'>{location}</span>
        </p>
        <p className='space-x-2'>
          <span className='font-bold'>Company:</span>
          <span className='text-sm'>{company}</span>
        </p>
      </div>
    )
  }
}

export default ClassUserCard;