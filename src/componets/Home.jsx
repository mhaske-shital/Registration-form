import React ,{useState}from 'react'
import {useFormik} from 'formik';
import * as yup from "yup"
export default function () {
   const [data, setdata] = useState("")
    const formik=useFormik({
        initialValues:{
            name:"",
            dataAGE:"",
            Gender:"",
            mobile:"",
            govtId:"",
            gurdian:"",
            state:"",
            city:"",
            address:"",
            country:"",
            occupation:"",
            Religion:"",
            materialstatus:"",
            bloodgp:"",
            nationality:"",
        },
       
        onSubmit:async (values,action)=>{

            setdata(values)
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          
            console.log(values,"ss");
            action.resetForm()
        }
    })
  return (
    <>
    <section className="h-75 h-custom" style={{backgroundcolor: "#8fc4b7"}}>
  <div className="container py-5 h-75">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="https://media.istockphoto.com/photos/businessman-filling-online-registration-form-picture-id1013435204?b=1&k=20&m=1013435204&s=170667a&w=0&h=AyuR-G-C9lPYAIf6noX4xVzbwwuH83jxIeAUz_w3gIs="
            className="w-100" style={{borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem"}}
            alt="Sample photo" />
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-1 pb-1 pb-md-0 mb-md-1 px-md-1">Registration Info</h3>

            <form className="px-md-1" onSubmit={formik.handleSubmit}>
                <div className="form-outline mb-2">
                <label className="form-label" 
                >Name</label>
                <input type="text" className="form-control" 
                placeholder='Enter name'
                 name="name" 
                 value={formik.values.name} 
                 onChange={formik.handleChange} required />
                 
                <label className="form-label mt-2">Date of birth or age</label>
                <input type="text" className="form-control"
                placeholder='Enter Date of birth or age'
                name="dataAGE" 
                value={formik.values.dataAGE} 
                onChange={formik.handleChange} required/>
                <label className='form-label mt-2' >Gender</label>
                <select className="form-select mt-1"
                name="Gender" 
                value={formik.values.Gender} 
                onChange={formik.handleChange} required>
                  <option value="select" >select</option>
                  <option value="male">male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <label className='form-label mt-2'>mobile NO</label>
                <input type="text" className="form-control"  placeholder='enter mobile no'
                name="mobile" 
                value={formik.values.mobile} 
                onChange={formik.handleChange} required />
                <label className='form-label mt-2'>Govt Issused ID</label>
                <input type="text" className="form-control"  placeholder='enter Govt Issused ID'
                name="govtId" 
                value={formik.values.govtId} 
                onChange={formik.handleChange} required  />
                <label className='form-label mt-2'>Gurdian details</label>
                <input type="text" className="form-control"  placeholder='Enter details'
                 name="gurdian" 
                 value={formik.values.gurdian} 
                 onChange={formik.handleChange} required/>
                <label className='form-label mt-2'>State</label>
                <select className="form-select mt-1" 
                 name="state" 
                 value={formik.values.state} 
                 onChange={formik.handleChange} required>
                  <option value="1" >select</option>
                  <option value="maharashtra">maharashtra</option>
                  <option value="goa">goa</option>
                  <option value="gujrat">gujrat</option>
                  <option value="Other">Other</option>
                </select>
                <label className='form-label mt-2'>City</label>
                <select className="form-select mt-1"
                 name="city" 
                 value={formik.values.city} 
                 onChange={formik.handleChange} required>
                  <option value="1" >select</option>
                  <option value="pune">pune</option>
                  <option value="aurangabad">aurangabad</option>
                  <option value="mumbai">mumbai</option>
                  <option value="Other">Other</option>
                </select>
                <label className='form-label mt-2'>Address</label>
                <input type="text" className="form-control"  placeholder=' Enter Address' 
                 name="address" 
                 value={formik.values.address} 
                 onChange={formik.handleChange} required/>
                <label className='form-label mt-2'>Country</label>
                <select className="form-select mt-1"
                name="country" 
                value={formik.values.country} 
                onChange={formik.handleChange} required>
                  <option value="1" >select</option>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="France">France</option>
                  <option value="Other">Other</option>
                </select>
                <label className='form-label mt-2'>Occupation</label>
                <input type="text" className="form-control"  placeholder=' Enter Occupation'
                 name="occupation" 
                 value={formik.values.occupation} 
                 onChange={formik.handleChange} required/>
                <label className='form-label mt-2'>Religion</label>
                <input type="text" className="form-control"  placeholder=' Enter Religion'
                name="Religion" 
                value={formik.values.Religion} 
                onChange={formik.handleChange} required/>
                <label className='form-label mt-2'>Material status</label>
                <select className="form-select mt-1" 
                name="materialstatus" 
                value={formik.values.materialstatus} 
                onChange={formik.handleChange} required>
                  <option value="1" >select</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                  <option value="other">Other</option>
                </select>
                <label className='form-label mt-2'>Blood group</label>
                <select className="form-select mt-1"
                 name="bloodgp" 
                 value={formik.values.bloodgp} 
                 onChange={formik.handleChange} required>
                  <option value="1" >select</option>
                  <option value="2">O+</option>
                  <option value="3">A+</option>
                  <option value="4">B+</option>
                  <option value="4">Other</option>
                </select>
                <label className='form-label mt-2'>Nationality</label>
                <input type="text" className="form-control"  placeholder=' Enter nationality'
                 name="nationality"
                value={formik.values.nationality} 
                 onChange={formik.handleChange} required/>
               
              </div>
             <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
