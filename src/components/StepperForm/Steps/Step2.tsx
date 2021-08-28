import React,{useState,useRef} from 'react'
import '../StepperForm.scss'


const Step2 =()=>{ 
    const[hasBusiness,setHasBusiness]=useState(false)
    //const[activeButton,setActiveButton]=useState("")


    const onChangeYear=(e:any)=>{
        //setActive(!active)
        setHasBusiness(!hasBusiness)
        e.preventDefault();
  
    }

    return(
        <>
         <form action="" className="row w-100">
                <div className={` col-12 d-flex`}>
                  
                        <label className=" mb-3" style={{width:"80%"}} htmlFor="">Are opening a new business?</label>
                        <div style={{width:"20%"}}>
                            <label className="switch" onClick={(e)=>onChangeYear(e)} >
                                <input  className="switch-input" type="checkbox" checked={hasBusiness} />
                                <span className="switch-label" data-on="Yes" data-off="No"></span> 
                                <span   className="switch-handle"></span> 
                            </label>
                        </div>
                </div>

                <div className={`col-12 mt-3 mb-2`}>
                    <div className={`${hasBusiness===true?"":"d-none"} `}  >
                        <label className="mb-3" htmlFor="years">How long do you have own business?</label>
                            <select className="w-100" name="years" id="years">
                                <option value="" selected disabled hidden >Choose an option</option>
                                <option value="1">1 to 2 year</option>
                                <option value="2">3 to 5 year</option>
                                <option value="2">5 or more year</option>

                            </select>
                    </div>
                </div>
         </form>
        </>
    )
}

export default Step2