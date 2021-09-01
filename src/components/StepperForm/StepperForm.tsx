import React,{useState,useRef} from 'react'
import Donut from '../Donut/Donut'
import {useDispatch,useSelector} from 'react-redux'
import './StepperForm.scss';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';


const StepperForm =()=>{ 

    const [step,setStep]= useState(0)

    const StepReducer = useSelector((state:any)=>state.StepReducer)


    const Next=()=>{
        step<3?setStep(step +1):setStep(1)
    }


    const Back=()=>{
        step===0 ?window.location.href=('https://www.google.com'):setStep(step -1)
    } 

    console.log(StepReducer)

    return(
        <>
          
            <div className="row" style={{margin:0,height:"101px",background:'#1435a0'}}>
                <div className="col-12" style={{height:"180px",position:"relative",margin:0,padding:0}}>

                    <div className="w-100" style={{position:"absolute",bottom:"13px ",display:"flex",justifyContent:"center"}}>
                    <Donut countstep={3} step={step}/>
                    </div>
    
                </div>
            </div>

            <div className="row justify-content-center align-items-center p-relative " style={{ height:"calc(100vh - 101px)",backgroundColor:"white",margin:0}}>

                
                <div  className={`${step===0?"d-flex":"d-none"} p-4 bg-white w-50 d-flex flex-column sizecontainer`} style={{borderRadius:'12px',position:"absolute",zIndex:99 }}>
                    <label className={"text-center"} style={{fontSize:"40px"}}>Sign Up o Get Quote?</label>
                    
                    <div className="col-12 mt-4 d-flex justify-content-center ">
                        <button className={`btn-simple btn-border `} onClick={()=>Back()}>Sign Up</button>

                        <button className={`btn-simple btn-full-bgcolor `} onClick={()=>Next()}>Get Quote</button>
                    
                    </div>
                </div>

            
                <div  className="p-4 bg-white w-50 d-flex flex-column sizecontainer" style={{borderRadius:'12px',position:"absolute",margin:0 }}>

            
                    <div className={`${step>0?"d-flex col-12":"d-none"} mt-2 mb-4  d-flex align-items-center justify-content-between`}>
                        <h3 className="font-weight-bold" >Business Information</h3>
                        <span>step {step}-3</span>
                    </div>

                    <div  style={{position:"relative",height:"150px",width:"100%"}}>

                    

                        <div className={`containerForm  ${step===1?"active":""}`}>
                            <Step1/>
                        </div>

                        <div className={`containerForm  ${step===2?"active":""}`}>
                            <Step2/>
                        </div>

                        <div className={`containerForm  ${step===3?"active":""}`}>
                            <Step3/>
                        </div>

                    </div>

                    <div className={`${step>0?"d-flex  col-12":"d-none"} mt-2 mb-4 align-items-center justify-content-between`}>
                    <div className="col-12 mt-4 d-flex justify-content-center ">
                        <button className={`btn-simple btn-border  ${step===1?"": ""}`} onClick={()=>Back()}>Back</button>

                        <button className={`btn-simple btn-full-bgcolor ${step!=3?"": "d-none"}`} onClick={()=>Next()}>Next</button>

                        <button className={`btn-simple btn-full-bgcolor ${step===3?"": "d-none"}`}>Submit</button>
                    </div>
                    </div>


                </div>

            </div>
          
        </>
    )
}

export default StepperForm