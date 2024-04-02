import React, { useState } from 'react'

export default function Images({arr}) {
    const [searchQuery,setSearchQuery]=useState('');

    const handlechange=(e)=>{
        setSearchQuery(e.target.value);
    }

    const filteredData = arr.filter(item =>
        // item.name.toLowerCase().includes(searchQuery.toLowerCase())
        //item.age.toString().includes(searchQuery)
        item.name.toUpperCase().includes(searchQuery.toUpperCase())
    );
  return (
    <div>
        {
            arr.map((item,index)=>(
                <div key={index}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>Age: {item.age}</p>
                </div>
            ))
        }


        <br />
        <h1>Filte and Search</h1>
        <input type="text" placeholder='search......'
        value={searchQuery}
        onChange={handlechange} />
        <div style={{display:"flex"}}>
     
        {filteredData.length === 0 ? (
          <li>No results {searchQuery} found</li>
        ) : (
          filteredData.map((item, index) => (
            <li key={index}>
              <img src={item.image} height="50%" alt={item.name} />
              <p>{item.name.toUpperCase()}</p> {/* Displaying name in uppercase */}
              <p>Age: {item.age}</p>
            </li>
          ))
        )}
        {/* {
            filteredData.map((item,index)=>(
                <li key={index}>
                    <img src={item.image} height="50%" alt={item.name} />
                    <p>{item.name}</p>
                    <h5>Age: {item.age}</h5>
                </li>
            ))
        } */}

        </div>
        
      
    </div>
  )
}
