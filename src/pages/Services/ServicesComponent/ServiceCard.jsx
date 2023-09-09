import { useEffect, useState } from "react";
import Cards from "./Cards";

const ServiceCard = () => {
    
    const [control, setControl] = useState(false);
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServicesData(data);
                // setControl(control)
                
            })
            .catch(error => console.log(error))

    }, [control])

    return (
        <>
            <section className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {
                    servicesData.map(service => <Cards className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10"
                        key={service._id}
                        service={service}
                        control ={control}
                        setControl={setControl}
                    > </Cards>

                    )
                }
            </section>

        </>
    );
};

export default ServiceCard;