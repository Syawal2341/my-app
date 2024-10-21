"use client"
import { useState } from 'react';
import Card from '../../../../components/card';

export default function AdminWork() {
  const [data, setData] = useState({
    title:'',
    employeType:'',
    companyName:'',
    location:'',
    startDate:'',
    endDate:'',
  });
  
  const optEmployeType = [
    {label:'Full Time', value:'full-time'},
    {label:'Part Time', value:'part-time'},
    {label:'Contract', value:'contract'},
    {label:'Internship', value:'internship'}
  ]

  const optLocation = [
    {label:'Onsite', value:'onsite'},
    {label:'WFH', value:'wfh'},
  ]

  const inputHandler= (e) =>{
    setData({...data, [e.target.name]: e.target.value })
  }

  async function onSubmitData() {
    try{
      let res = await fetch('/api/work', {
        method:'POST',
        body: JSON.stringify(data),
      })
      let resData = await res.json()
      if(!resData.data){
        throw Error(resData.message)
      }
      alert("Data berhasil disimpan dengan id \n"+ resData.data.insertedId)
    }catch(err){
      console.error("ERR", err.message)
      alert(err.message)
    }
}


  return (<>
      <Card title="Work Form" className="pb-5">
        <div className="w-full my-2">
            <label>Title</label> 
            <input 
              type="text" 
              name='title'
              value={data.title}
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>Employe Type</label>
            <select  
              name='employeType' 
              onChange={inputHandler}
              className="w-full border my-input-text">
              {
                optEmployeType && 
                  optEmployeType.map((item, key)=>
                    <option key={key} value={item.value}>{item.label}</option>
                  )
              }
            </select>
        </div>

        <div className="w-full my-2">
            <label>Company Name</label>
            <input 
              name='companyName' 
              type="text" 
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>Location</label>
            <select 
              name='location'
              onChange={inputHandler}
              className="w-full border my-input-text">
              {
                optLocation && 
                optLocation.map((item, key)=>
                    <option key={key} value={item.value}>{item.label}</option>
                  )
              }
            </select>
        </div>

        <div className="w-full my-2">
            <label>Start Date</label>
            <input 
              name='startDate'
              onChange={inputHandler}
              type="date" 
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>End Date</label>
            <input 
              name='endDate'
              onChange={inputHandler}
              type="date" 
              className="w-full border my-input-text"/>
        </div>

        <button 
          onClick={onSubmitData}
          className="mx-1 h-9 items-center justify-center px-4  rounded-md bg-amber-500">
            <label>Submit Data</label>
        </button>
      </Card>
      
      <Card title="Contact" className="pb-5">
          <footer class="bg-dark pt-3 pb-12">
            <div class="container">
              <div class="flex flex-wrap">

                <div class="w-full px-4 mb-12 text-slate-500 font-medium md:w-1/3">
                  <h3 class="font-semibold text-xl mb-2">Hubungi Kami</h3>
                  <p>mussyawal12@gmail.com</p>
                  <p>Jl. Dr. Mussyawal No. 16</p>
                  <p>Bekasi</p>
                </div>
                
                <div class="w-full px-4 mb-12 md:w-1/3">
                  <h3 class="font-semibold text-xl text-gray-500 mb-2">Bahasa Code</h3>
                  <ul class="text-gray-500">
                    <li>
                      <a href="https://www.w3schools.com/js/" class="inline-block text-base hover:text-primary md-3">Javascript</a>
                    </li>
                  </ul>
                  <ul class="text-gray-500">
                    <li>
                      <a href="https://nodejs.org/en" class="inline-block text-base hover:text-primary md-3">Node.js</a>
                    </li>
                  </ul>
                  <ul class="text-gray-500">
                    <li>
                      <a href="https://tailwindcss.com/" class="inline-block text-base hover:text-primary md-3">Tailwind.css</a>
                    </li>
                  </ul>
                </div>

                <div class="w-full px-4 mb-12 md:w-1/3">
                  <h3 class="font-semibold text-xl text-gray-500 mb-2">Tautan</h3>
                  <ul class="text-gray-500">
                    <li>
                      <a href="/" class="inline-block text-base hover:text-primary md-3">Home</a>
                    </li>
                  </ul>
                  <ul class="text-gray-500">
                    <li>
                      <a href="/contact" class="inline-block text-base hover:text-primary md-3">Contact</a>
                    </li>
                  </ul>
                  <ul class="text-gray-500">
                    <li>
                      <a href="/admin/work" class="inline-block text-base hover:text-primary md-3">Work From</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </footer>
      </Card> 

    </>
  );
}
  