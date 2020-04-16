import React,{Component} from 'react';
import Header from './component/Header';
//https://travelpayouts.github.io/slate/#data-of-countries-in-json-format
import Countries from './component/Countries';
const url = "http://localhost:8900/countries";
class Home extends Component{
  constructor(){
    super()
    this.state={

        countries:''

    }

  }
  
  render(){
    console.log('countroes list',this.state.countries)
    return(
        <React.Fragment>
          <Countries class="country-item" countriesdata={this.state.countries}/>
          </React.Fragment>

    )}
    componentDidMount(){
      console.log('component did mount')
      fetch(url,{method:'GET'})
      .then(response=>response.json())
      .then(data=>this.setState({countries:data}))

  }
  
}

export default Home;