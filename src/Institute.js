import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Header from './Header';
import Footer from './Footer';

function Institute () {
  const columns=[
    {
        name:'Sno',
        selector:row=>row.sno,
        sortable:true
    },
    {
      name:"Code",
      selector:row=>row.code,
      sortable:true
    },
    {
      name:"college",
      selector:row=>row.college,
      sortable:true
    },
    {
      name:"place",
      selector:row=>row.place,
      sortable:true

    },
    {
      name:"district",
      selector:row=>row.district,
      sortable:true
    },
    {
      name:"region",
      selector:row=>row.region,
      sortable:true
    },
    {
      name:'type',
      selector:row=>row.type,
      sortable:true
    },
    {
      name:"minority",
      selector:row=>row.minority,
      sortable:true
    },
    {
      name:"insttype",
      selector:row=>row.insttype,
      sortable:true
    }

  ];
  const data=[
    {
        sno:1,
        code:"ABRK",
        college:"ABR COLLEGE OF ENGG AND TECHNOLOGY",
        place:"KANIGIRI",
        district:"PKS",
        region:"AU",
        type:"PVT",
        minority:"NA",
        insttype:"COED"
    },
    {
        sno:2,
        code:"ANIL",
        college:"ANIL NEERUKONDA INSTITUTE OF TECHNOLOGY AND SCI",
        place:"BHEEMUNIPATNAM",
        district:"VSO",
        region:"AU",
        type:"PVT",
        minority:"NA",
        insttype:"COED"
    },
    {
        sno:3,
        code:"BECB",
        college:"BAPATLA ENGINEERING COLLEGE",
        place:"BAPATLA",
        district:"GTR",
        region:"AU",
        type:"PVT",
        minority:"NA",
        insttype:"COED"
    },
    {
        sno:4,
        code:"LBCE",
        college:'lakireddy balireddy',
        place:"MYLAVARAM",
        district:"KRI",
        region:"AU",
        type:"PVT",
        minority:"NA",
        insttype:"COED"
    },
    {
        sno:5,
        code:"ACEE",
        college:"ADARSH COLLEGE OF ENGINEERING",
        place:"GOLLAPROLU",
        district:"EG",
        region:"AU",
        type:"PVT",
        minority:"NA",
        insttype:"COED"
    },
    {
        sno:6,
        code:"ADIT",
        college:"ADITYA INSTITUTE OF TECHNOLOGY AND MGMT",
        place:"TEKKALI",
        district:"SKL",
        region:"AU",
        type:"PVT",
        minority:"NA",
        insttype:"COED"
    },
    {
        sno:7,
        code:"CHBR",
        college:"CHEBROLU ENGINEERING COLLEGE",
        place:"GUNTUR",
        district:"GTR",
        region:"AU",
        type:"PVT",
        minority:"NA",
        insttype:"COED"
    },
    {
        sno:8,
        code:"DHAN",
        college:"DHANEKULA INST OF ENGG TECHNOLOGY",
        place:"VIJAYAWADA",
        district:"KRI",
        region:"AU",
        type:"PVT",
        minority:"NA",
        insttype:"COED"
    },
    {
      sno:5,
      code:"ACEE",
      college:"ADARSH COLLEGE OF ENGINEERING",
      place:"GOLLAPROLU",
      district:"EG",
      region:"AU",
      type:"PVT",
      minority:"NA",
      insttype:"COED"
  },
  {
      sno:6,
      code:"ADIT",
      college:"ADITYA INSTITUTE OF TECHNOLOGY AND MGMT",
      place:"TEKKALI",
      district:"SKL",
      region:"AU",
      type:"PVT",
      minority:"NA",
      insttype:"COED"
  },
  {
      sno:7,
      code:"CHBR",
      college:"CHEBROLU ENGINEERING COLLEGE",
      place:"GUNTUR",
      district:"GTR",
      region:"AU",
      type:"PVT",
      minority:"NA",
      insttype:"COED"
  },
  {
      sno:8,
      code:"DHAN",
      college:"DHANEKULA INST OF ENGG TECHNOLOGY",
      place:"VIJAYAWADA",
      district:"KRI",
      region:"AU",
      type:"PVT",
      minority:"NA",
      insttype:"COED"
  },
  {
    sno:5,
    code:"ACEE",
    college:"ADARSH COLLEGE OF ENGINEERING",
    place:"GOLLAPROLU",
    district:"EG",
    region:"AU",
    type:"PVT",
    minority:"NA",
    insttype:"COED"
},
{
    sno:6,
    code:"ADIT",
    college:"ADITYA INSTITUTE OF TECHNOLOGY AND MGMT",
    place:"TEKKALI",
    district:"SKL",
    region:"AU",
    type:"PVT",
    minority:"NA",
    insttype:"COED"
},
{
    sno:7,
    code:"CHBR",
    college:"CHEBROLU ENGINEERING COLLEGE",
    place:"GUNTUR",
    district:"GTR",
    region:"AU",
    type:"PVT",
    minority:"NA",
    insttype:"COED"
},
{
    sno:8,
    code:"DHAN",
    college:"DHANEKULA INST OF ENGG TECHNOLOGY",
    place:"VIJAYAWADA",
    district:"KRI",
    region:"AU",
    type:"PVT",
    minority:"NA",
    insttype:"COED"
},
{
  sno:5,
  code:"ACEE",
  college:"ADARSH COLLEGE OF ENGINEERING",
  place:"GOLLAPROLU",
  district:"EG",
  region:"AU",
  type:"PVT",
  minority:"NA",
  insttype:"COED"
},
{
  sno:6,
  code:"ADIT",
  college:"ADITYA INSTITUTE OF TECHNOLOGY AND MGMT",
  place:"TEKKALI",
  district:"SKL",
  region:"AU",
  type:"PVT",
  minority:"NA",
  insttype:"COED"
},
{
  sno:7,
  code:"CHBR",
  college:"CHEBROLU ENGINEERING COLLEGE",
  place:"GUNTUR",
  district:"GTR",
  region:"AU",
  type:"PVT",
  minority:"NA",
  insttype:"COED"
},
{
  sno:8,
  code:"DHAN",
  college:"DHANEKULA INST OF ENGG TECHNOLOGY",
  place:"VIJAYAWADA",
  district:"KRI",
  region:"AU",
  type:"PVT",
  minority:"NA",
  insttype:"COED"
}

]
const [records,setRecords]=useState(data);

function handleFilter(event){
  const newData=data.filter(row=>{
    return row.sno.toLowerCase().includes(event.target.value.toLowerCase())
  })
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

export default Institute;

