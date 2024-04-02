import React, { useState } from 'react'
import { Data } from './Data'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


function Tablee() { 
   const [search,setSearch]=useState('')

    const filterData = Data.filter(item =>
        item.id.toString().includes(search.toString())
    );

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              placeholder='search..........'
              onChange={(e)=>setSearch(e.target.value)}
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
           { 
            filterData.length===0 ? (
               <h1>Not Found First Name {search}</h1>
            ):(filterData.map((item,index)=>(
              <tr key={index}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.id}</td>
              </tr>
           )))}
          </tbody>
        </Table>
        </Container>
    </div>
  )
}

export default Tablee
// import React, { useState } from 'react';
// import { Data } from './Data';
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Tablee() {
//     const [search, setSearch] = useState('');

//     // Filter the data based on the search query
//     const filterData = Data.filter(item =>
//         item.first_name.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div>
//             <Container>
//                 <h1 className='text-center mt-4'>Contact Keeper</h1>
//                 <Form>
//                     <InputGroup className='my-3'>
//                         {/* onChange for search */}
//                         <Form.Control
//                             placeholder='search..........'
//                             onChange={(e) => setSearch(e.target.value)}
//                         />
//                     </InputGroup>
//                 </Form>
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* Render filtered data */}
//                         {filterData.map((item, index) => (
//                             <tr key={index}>
//                                 <td>{item.first_name}</td>
//                                 <td>{item.last_name}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.phone}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </Container>
//         </div>
//     );
// }

// export default Tablee;
