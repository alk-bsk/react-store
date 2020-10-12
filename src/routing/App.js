import React,{useState} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import '../assets/css/App.css';
import Home from '../screen/Home';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import CardDetails from '../screen/CardDetails';
//import Chat from '../components/Chat';



export default function App(props) {
   const [toggled,setToggled]=useState('');
  // const [showChat,setShowChat]=useState(false);
   const [search,setSearch]=useState('');
  // useEffect(()=>{
  //   setTimeout(()=>setShowChat(true),5000);
  // },[]);
  return (
    <Router>
    <div className="App">
      <div className="wrapper">
        <SideBar toggled={toggled}/>

        <div id="content">
          <Header toggled={toggled} setToggled={setToggled} search={search} setSearch={setSearch} />
           <div>
              <Switch>
                <Route  path='/item/:id' component={CardDetails} /> 
                <Route exact path='/' render={(props) => (
                    <Home {...props} search={search} fil="" />
                  )} /> 
                <Route exact path='/phone' render={(props) => (
                    <Home {...props} search={search} fil="phone" />
                  )} />
                <Route exact path='/laptop' render={(props) => (
                    <Home {...props} search={search} fil="laptop" />
                  )} />
              </Switch>
           </div>
          {/* {showChat?<Chat />:null} */}

        </div>
    </div>
    </div>
    </Router>
  );
}

