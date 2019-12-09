import React,{Component} from 'react';
 
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App  extends Component{
  
   render(){
  
    return (
      <div >
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  
   }
}

export default App;
//vid 8 I set up the whole project with google font,break component(layout,aux)
//