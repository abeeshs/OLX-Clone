import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/Context';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';


const Create = () => {
  const history =useHistory()
  const {firebase} =useContext(FirebaseContext)
  const {user} =useContext(AuthContext)
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  const date =new Date()
  const handleSubmit=()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          userId:user.uid,
          createdAt:date.toDateString(),
          url
        })
        history.push('/')
      }).catch((err)=>{
        console.log(err.message)
      })
    })
  }


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number"  value={price}
              onChange={(e)=>{
                setPrice(e.target.value)
              }} id="fname" name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px"  height="200px" src={image? URL.createObjectURL(image):""}></img>
          
            <br />
            <input type="file" 
              onChange={(e)=>{
                console.log(e.target.files)
                setImage(e.target.files[0])
              }} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
