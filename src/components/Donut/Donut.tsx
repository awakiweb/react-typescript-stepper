import React from 'react';
//import logo from './logo.svg';
import { Doughnut,Line } from 'react-chartjs-2';
//import './App.css';
import './Donut.scss'


const Donut =(props:any)=> {
  



  const data = (canvas:any) => {
    const ctx = canvas.getContext('2d')
    //const gradient = ctx.createLinearGradient(0,0,100,0);

    return {

      datasets: [
        
        {
          data: [(100/props.countstep)*props.step,100-(100/props.countstep*props.step)],
          backgroundColor: [
            '#1435a0',
            '#9c9c9c42',
          ],
      
          borderWidth:0,
       
        },
      ]
    }
    }


    const op ={
      responsive: true, 
      maintainAspectRatio: false,


      cutoutPercentage: 75,
      tooltips: {enabled: false},
      legend: {
        display: false,
  
      },
    
  
      plugin:{
      
      },
  
      animation: {
        animateScale: false,
        animateRotate: false,   
     },

    }
  return (


    <div className={`${props.step>0?"active":""} containerChart p-2`} style={{height:"140px " ,width:"140px",backgroundColor:'white',borderRadius:"50%"}}>
    <div style={{position:'absolute'}} className="d-flex flex-column align-items-center justify-content-center ">
        <span className="label1">{Math.round(100/props.countstep*props.step)} %</span>
        <span className="label2">complete</span>
    </div>


    <Doughnut width={20} height={20} data={data} options={op} />

    </div> 
  );
}

export default Donut;
