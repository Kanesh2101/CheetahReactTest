import logo from './logo.svg';
import './App.css';
import data from './data.json';
import {Component} from 'react';
import SearchBox from './components/Search-Box/searchBox';
import CategoryList from './components/Category-List/categoryList'


const initialList = {
  categories: data.recipients
}

class App extends Component{
  constructor(){
    super();
    this.state = {
      filteredCategories:[],
      commonTag: "",
      searchField: {
        input1: "",
        input2: ""
      }
    }  
  }
  
  componentDidMount(){
   this.setState({filteredCategories: data.recipients});
    
  }

  onSearchChange= (input1, input2)=>{ 
    let filterArray = [];
    input1 = input1.trim();
    input2 = input2.trim();
    var commonTagStr = input1 + ", " + input2;
    if(input1 != input2){
      let tempArray = Object.assign(initialList.categories);
      let filtered = tempArray.filter(category=>
        category?.tags?.includes(input1) && category?.tags?.includes(input2)
        )
        this.setState({filteredCategories: filtered, commonTag: commonTagStr});
      }else
      {
        this.setState({filteredCategories: []});
      }
   
  }

  
  onClearClick= ()=>{ 
   this.setState({filteredCategories: initialList.categories, commonTag: ""})
  }

  render(){
    let {filteredCategories, commonTag} = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Cheetah Digital Techinical React Test</h1>
        <SearchBox onSubmit={this.onSearchChange} onClear={this.onClearClick} />
        <br></br>
        <CategoryList categories={filteredCategories} commonTag={commonTag}/>
      </div>
    )
  }
}

export default App;
