import React,{useState,useRef} from 'react'
import '../StepperForm.scss'

const Step1 =()=>{ 


    return(
        <>
            <form action="" className="row w-100" >
                <div className="col-12">
                    <label htmlFor="">Email</label>
                    <input placeholder="Examaple@123.com" type="email" name="" id="" />
                </div>
            </form>
        </>
    )
}

export default Step1