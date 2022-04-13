import React, {useState } from 'react' 
import { useFormik } from 'formik';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

 export default function From() {

    const [formInfo, setFormInfo] = useState()
    const [formResponse, setFormResponse] = useState()
    const [formState, setFormState] = useState('logIn')

    const navigate = useNavigate()

    const handlePage = () => {
      navigate('/products')
    }

    const formik = useFormik({
        initialValues: {
          email: ''
        },
        onSubmit: async (values, {resetForm}) => {
          try{
            setFormInfo(values)
            await axios({
              method: 'POST',
              url:`http://localhost:8080/${formState}`,
              data: values
            }).then((res)=>{
              setFormResponse(res.data.state)
              setFormInfo(values)
              resetForm()
              if(res.data.state === 'satisfactory') {
                sessionStorage.setItem('email', `${res.data.email}`)
                handlePage()
              } else if(res.data.state === 'negative') {
                console.log('error')
              }

            })
          } catch{
            alert('error')
          }
        }
      });
    
    return ( 
        <div>
          <div className='form-header'>
            <a onClick={()=>{setFormState('signIn')}}>Iniciar Sesion</a>
            <a onClick={()=>{setFormState('logIn')}}>Crear Usuario</a>
          </div>
          <form className='form-log' onSubmit={formik.handleSubmit}>
            {formState === 'logIn' ? <h1>Crear usuario</h1> : <h1>Iniciar sesión</h1> }
              
              <div className='form-level'>
                  <label>Email</label>
                  <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Correo electrónico'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  autoFocus
                  />
              </div>
                  <button className='form-button' type="submit">{formState === 'logIn' ? 'Crear' : 'Iniciar'}</button>

          </form>
        </div>
    )
}