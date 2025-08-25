import React from 'react';
import ClassUserCard from './ClassUserCard';

class About extends React.Component {

  constructor(props) {

    super(props);
    // console.log("parent constructor")

  }

  componentDidMount() {
    // console.log("parent component dit mount");
  }


  render() {

    // console.log("parent render");

    return (
      <div className='p-7 space-y-12'>
        <p>About</p>
        <ClassUserCard />
      </div>
    );

  };

};


export default About;