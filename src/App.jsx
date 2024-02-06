import Header from './compontents/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';
import { useState } from 'react';
import Field from './compontents/Field';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("")
  }
const removeItem =(index) =>{
  let arr = data;
  arr.splice(index,1);
  setData([...arr])
}




  return (
    <div className='app'>
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className='data'>
        <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((e, index) => {
            return (
              <div key={index} className='data_val'>
          <h4>{e.name}</h4>
          <h4>{e.email}</h4>
          <Stack>
          <Button onClick={()=> removeItem(index)} variant="contained" color="error">
            <DeleteIcon />
          </Button>
          </Stack>
        </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
