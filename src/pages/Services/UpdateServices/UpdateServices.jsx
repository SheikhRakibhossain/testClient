import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Input } from '@nextui-org/react';


const UpdateServices = () => {
    // const { id } = useParams();
    const loadedService = useLoaderData();
    // const [services, setServices] = useState({});
    // console.log(id);
    // setServices(loadedService)
    // console.log(loadedService);

    const { register, handleSubmit,
        formState: { errors },
    } = useForm()

    // useEffect(() => {

    //     fetch(`http://localhost:5000/updateservices/${id}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    //         .catch(error => console.log(error))

    // }, [])

   

    const onSubmit = (data) => {
        console.log(data)

    }


    return (
        <section className="container mx-auto border px-40">
            {/* <p>{services.Price}</p> */}
            <p>{loadedService.serviceName}</p>
            <div className=" flex flex-wrap justify-center items-center md:flex-nowrap gap-4 py-4">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input className='text-black' type="text" variant="underlined" defaultValue={loadedService?.serviceName}  {...register("name")} />
                        <Input type="text" variant="underlined" defaultValue={loadedService?.Category} {...register("Cate", { required: true })} />
                        <Input type="number" variant="underlined" defaultValue={loadedService?.Price} {...register("value", { required: true })} />
                        <Input type="text" variant="underlined" defaultValue={loadedService?.Details} {...register("detail", { required: true })} />
                        {errors.Category && <span>This field is required</span>}
                        <Input type="submit" value="Submit" />

                    </div>

                </form>
            </div>

        </section >

    );
};

export default UpdateServices;