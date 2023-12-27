import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
  const [nom,setNom] =useState()
  const [description,setDescription] =useState()
  
 const [addSection,setAddSection]=useState(false)
  const navigate=useNavigate()
  const Submit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/new-category", {nom,description})
    .then(result => {

      alert("Category added Succssfully!")
      navigate('/categories')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="d-flex w-60 vh-100 justify-content-center align-items-center  ">
      <div className="w-50 border bg-light p-5  justify-content-center align-items-center ">
          <form onSubmit={Submit}>
            <h3>Add Category</h3>
            
            <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                            <label htmlFor="">Nom Categorie</label>
                                <input type="text" className='input' name="nom" onChange={(e)=> setNom(e.target.value)} />
                            </div>
                        </div>
            
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                            <label htmlFor="">Description Categorie</label>
                                <input type="text" className='input' name="description" onChange={(e)=> setDescription(e.target.value)} />
                            </div>
                        </div>
            <div className="d-flex justify-content-center">  
            <button className="btn btn-info">Submit</button>
          </div>
          </form>
      </div>
    </div>
  )
}

export default AddCategory
