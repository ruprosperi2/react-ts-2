import React from 'react'

type Props = {name:string}

class Welcome extends React.Component <Props>{
    render(){
        return(
          <div>
              <h1>Welcome to my life {this.props.name}</h1>
          </div>
        )
    }
}

export default Welcome;