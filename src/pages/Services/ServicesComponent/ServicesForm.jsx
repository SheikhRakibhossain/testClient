import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form"

const ServicesForm = () => {

    const {register, handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        fetch('http://localhost:5000/services',{

        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(data)

        })
        .then( res=>res.json())
        .then(data=>{
            console.log(data)
            if( data.insertedId ){
                alert('services added successfully')
                // useForm.reset('')
            }
        })
        .catch(error=>console.log(error))
    }


    return (
        <section className="container mx-auto border px-40">
            <div className=" flex flex-wrap justify-center items-center md:flex-nowrap gap-4 py-4">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input type="text" variant="underlined" defaultValue="Web design" {...register("serviceName")} />
                        <Input type="text" variant="underlined" {...register("Category", { required: true })} />
                        <Input type="number" variant="underlined" {...register("Price", { required: true })} />
                        <Input type="text" variant="underlined" {...register("Details", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <Input type="submit" value="Submit" />

                    </div>

                </form>
            </div>
       
        </section >

                );
};

export default ServicesForm;