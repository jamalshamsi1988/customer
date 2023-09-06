import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomersDetailsPage from "../../components/template/CustomersDetailsPage";


const Index = () => {
    const [data , setData]=useState(null);

    const router=useRouter();
    const {query :{Index} , isReady}=router;
    
    useEffect(()=>{
        if(isReady){
             fetch(`/api/customer/${customerId}`)
                  .then((res)=> res.json())
                  .then((data)=> setData(data.data))
        }
    },[isReady]);
            if(data) return ( <CustomersDetailsPage data={data} /> )
}

export default Index;
