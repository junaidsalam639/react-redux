import React, { useState } from 'react';
import { TextField, Button, Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, editUser } from '../reducer/reducer';
import Swal from 'sweetalert2';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [button , setButton] = useState(true);

  const handleSubmit = () => {
    if (username !== '' && email !== '' && password !== '') {
      dispatch(addUser({ username, email, password }));
      Swal.fire({
        icon: 'success',
        title: 'User Added Successfully',
        width: 600,
        padding: '3em',
        color: 'black',
        fontWeight: 'bold',
        background: '#fff',
      });
      setUsername('');
      setEmail('');
      setPassword('');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all fields',
        width: 600,
        padding: '3em',
        color: 'black',
        fontWeight: 'bold',
        background: '#fff',
      });
    }
  };

  const handlerEdit = (e) => {
    setButton(!button);
    setUsername(e.username);
    setEmail(e.email);
    setPassword(e.password);

    const updatedUserData = {
      username: username,
      email: email,
      password: password,
    };
    dispatch(editUser({ id: e.id, updatedUser: updatedUserData }));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', backgroundColor: '#0984e3' }}>
      <h1 className='fw-bold text-white'>User Info</h1>
      <TextField
        id="outlined-basic"
        style={{ width: 300, margin: 10 }}
        label="Username"
        type="text"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white', borderColor: 'white' } }}
      />

      <TextField
        id="outlined-basic"
        style={{ width: 300, margin: 10 }}
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white', borderColor: 'white' } }}
      />

      <TextField
        id="outlined-basic"
        style={{ width: 300, margin: 10 }}
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white', borderColor: 'white' } }}
      />
      {
        button ? <Button variant="contained" onClick={handleSubmit} style={{ width: 300, margin: 10 }} disableElevation> Submit </Button> : null
      }

      <TableContainer component={Paper} style={{ width: '80%', marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className='text-center'>
                  <Button className='mt-2 mb-2' variant="contained" color="error" onClick={() => dispatch(deleteUser(user.id))}>
                    Delete
                  </Button>
                  <Button className='m-2' variant="contained" color="primary" onClick={() => handlerEdit(user)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default User;






// Beshak! setButton(!button); ka matlab hai ke button ke state variable ki qeemat ko ulta kar diya ja raha hai. Isay samajhnay ke liye, yeh tafseel se dekhein:

// button ek state variable hai jo React mein useState hook ke zariye manage kiya jata hai. Yeh ek boolean qeemat (ya to true ya false) ko darust karta hai.
// !button mein logical NOT operator (!) istemal ho raha hai. Jab aap isay boolean qeemat par lagate hain, to yeh us qeemat ko ulta kar deta hai. To agar button true hai, to !button false ho jata hai, aur agar button false hai, to !button true ho jata hai.
// setButton(!button) state ko update kar raha hai. setButton ek React hook useState dwara diya gaya function hai jo state variable ki qeemat ko update karne ke liye istemal hota hai. Is halat mein, isay uski mojooda qeemat ke ulte par set kiya ja raha hai.
// Toh asaan alfaaz mein, setButton(!button); button state variable ki qeemat ko ulta kar raha hai. Agar yeh true thi, to yeh false ho jati hai, aur agar yeh false thi, to yeh true ho jati hai. Yeh aksar do halaat ke darmiyan badalne ke liye istemal hota hai, jaise aapke udaharanay mein 'Edit' aur 'Submit' ke darmiyan badalne ke liye.





