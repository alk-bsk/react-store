import React from 'react';

export default function Card({data}){
    return(
        <div className="card text-center" style={{width: '100%',padding:'5px'}}>
            <img className="card-img-top card-image" src={require(`../assets/pic/${data.id}.jpg`)} alt="pic" height="350px" width="50px" />
            <div className="card-body" style={{height: '13vh'}}>
            <p className="card-title">{data.name}</p>
            </div>
          </div>
    );
}