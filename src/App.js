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
      buttonClicked : false
    }  
  }
  
  componentDidMount(){
   this.setState({filteredCategories: data.recipients});
    
  }

  onSearchChange= ()=>{ 
    var tempAr = Object.assign(initialList.categories);
    var combinationLst = [];
    let idCount = 0;
    for(let i = 0; i < tempAr.length; i++){
      let firstCater = tempAr[i]
      for(let j = 0; j < tempAr.length; j++){
        let secondCater = tempAr[j];
        //checking for self id
        if(firstCater.id == secondCater.id){
          continue;
        } 
        let count = 0; 
        var test = {fname: firstCater.name, sname: secondCater.name, tags: []} ;
        var tags= [];
        firstCater.tags.forEach(item=>{
          if(secondCater.tags.includes(item)){
            tags.push(item);
            count ++;
          };
          if(count >= 2 ){
            test.tags = tags;
            //checking if the name combination already exist in array
            if(combinationLst.findIndex(x => 
              (x.fname == firstCater.name && x.sname == secondCater.name) 
              || (x.fname == secondCater.name && x.sname == firstCater.name) ) == -1){
              test.id = idCount;
              combinationLst.push(test); 
              idCount++
            }    
          }
        })
      }      
    }
    this.setState({filteredCategories: combinationLst, buttonClicked: true});
  }


  render(){
    let {filteredCategories, buttonClicked} = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Cheetah Digital Techinical React Test</h1>
        <SearchBox onSubmit={this.onSearchChange} />
        <br></br>
        <CategoryList categories={filteredCategories} buttonClicked={buttonClicked}/>
      </div>
    )
  }
}

export default App;
