import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Header from './Header';
import Footer from './Footer';

function Courses () {
  const columns=[
    {
        name:'Sno',
        selector:row=>row.sno,
        sortable:true
    },
    {
      name:"Branch code",
      selector:row=>row.bcode,
      sortable:true
    },
    {
      name:"Branch name",
      selector:row=>row.bname,
      sortable:true
    },
  ];
  const data=[
    {
        sno:1,
        bcode:"AID",
        bname:"ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
    },
    {
        sno:2,
        bcode:"ASE",
        bname:"AEROSPACE ENGINEERING"
    },
    {
        sno:3,
        bcode:"CIV",
        bname:"CIVIL ENGINEERING"
    },
    {
        sno:4,
        bcode:"CSE",
        bname:"COMPUTER SCIENCE AND ENGINEERING"
    },
    {
        sno:5,
        bcode:"CSM",
        bname:"CSE(ARTIFICIAL INTELLIGENCE AND DATA SCIENCE)"
    },
    {
        sno:6,
        bcode:"ECE",
        bname:"ELECTRONICS AND COMMUNICATION ENGINEERING"
    },
    {
        sno:7,
        bcode:"EEE",
        bname:"ELECTRONICS AND ELECTRICAL ENGINEERING"
    },
    {
        sno:8,
        bcode:"INF",
        bname:"INFORMATION TECHNOLOGY"
    },
    {
        sno:9,
        bcode:"MEC",
        bname:"MECHANICAL ENGINEERING"
    }
]
const [records,setRecords]=useState(data);

function handleFilter(event){
  const newData=data.filter(row=>{
    return row.bname.toLowerCase().includes(event.target.value.toLowerCase())
  });
  setRecords(newData);
}
  return (
    <div>
      <Header/>
      <div className='container mt-5'>
      <DataTable columns={columns}
                  data={data}
                  
                    fixedHeader
                    pagination
                    >
                  </DataTable>
    </div>
    <Footer/>
    </div>
  )
}
export default Courses;