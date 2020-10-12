import React,{useState,useEffect} from 'react';
import Specification from '../components/Specification';
import axios from '../api/axiosOverallConfig';

export default function CardDetails({match}){
   let id=match.params.id;
    const [data,setData]=useState([]);
    useEffect(()=>{
      axios.get(`/${id}`).then(res=>{
        setData(res.data)
      }).catch(err=>console.log('error-->',err))
    },[id]);
   
    return(
        <div className="card">
        <h5 className="card-header" style={{background:'#bbd1dc'}}>{data.name}</h5>
        <div className="card-body">
            <div className="row">
                <div className="col-sm-5">
                 <div className="row">
                 <div className="col-sm-12" style={{textAlign: 'center'}}>
                 <img className="card-img-top" style={{width:'80%'}} src={require(`../assets/pic/${id}.jpg`)} alt="mobile" />
                </div>
                <div className="col-sm-12 mt-4" style={{textAlign: 'center'}}>
                <button type="button" className="btn btn-info">Price(INR): {data.price_in_inr} </button>
                </div>
                     
                </div>   
               
                </div>
                
                <div className="col-sm-7">
                    {data.specification?<Specification spec={data.specification} cat={data.catagory} />:null}
                </div>
            </div>
        </div>
        </div>
    );
}