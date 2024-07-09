import React,{useEffect,useState} from 'react'
export default function Covid() {
    const coviddata=async()=>{
        const res=await fetch('put link of the api');
        const actualdata=await res.json();
        setdata(actualdata.states.[0])

    };

    const [data, setdata] = useState([])
    useEffect(()=>{
        coviddata()

    },[])

  return (
    <>
      
    </>
  )
}
