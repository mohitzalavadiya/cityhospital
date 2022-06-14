import React, { useEffect, useState } from 'react';
import Home from './Home';
import Loading from './Loading';

const Loadingwithdata = Loading(Home)

function Hoc(props) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const fsalary = [

        {
    
            id: 101,
    
            name: 'Amit',
    
            joining_date: "01-06-2021",
    
            salary: 50000
    
        },
    
        {
    
            id: 102,
    
            name: 'Piyush',
    
            joining_date: "01-01-2019",
    
            salary: 60000
    
        },
    
        {
    
            id: 103,
    
            name: 'Meet',
    
            joining_date: "01-03-2020",
    
            salary: 25000
    
        },
    
        {
    
            id: 104,
    
            name: 'Lalit',
    
            joining_date: "01-12-2021",
    
            salary: 30000
    
        }
    
    ]
    const total =  fsalary.filter((s, i) => (s.salary > 25000));

    useEffect( () => {
        setLoading(true)
        setTimeout(()=> {setLoading(false); setData(total)}, 2000)
    }, [])
    return (
        <div>
            <Loadingwithdata loading={loading} data={data}  />
        </div>
    );
}

export default Hoc;