 import React,{useEffect,useState} from 'react';
 import Card from '../components/Card';
 import {NavLink} from 'react-router-dom';
 import axios from '../api/axiosOverallConfig';
 import '../assets/css/Home.css';

export default function Home({search,fil}){

  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('/all').then(res=>{
      setData(res.data.data)
    }).catch(err=>console.log('error-->',err))
  },[]);

    return (
        <div className="bg" >
            <div className="row">
              {data.filter(d=>d.name.toLowerCase().includes(search) && d.catagory.toLowerCase().includes(fil))
              .map(e=><div key={e.id}  className="col-md-3 mx-auto mb-3" style={{cursor: 'pointer'}}><NavLink to={`/item/${e.id}`}><Card data={e} /></NavLink></div>)}
            </div>
        </div>
    );
 }
