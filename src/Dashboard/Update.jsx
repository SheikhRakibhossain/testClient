import { Button, Input } from "@nextui-org/react";
import { useLoaderData } from "react-router-dom";

const Update = () => {

    const loadedUser = useLoaderData();
    const handleFormUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const status = form.status.value;
        const email = form.email.value;
        const UpdateUser = { name, status, email }
        console.log(UpdateUser);
        fetch(`http://localhost:5000/user/${loadedUser._id}`,{

        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(UpdateUser)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <>
            <section className="container mx-auto px-6">

                <p className="text-xl font-bold">Load user: {loadedUser.length}</p>
                <div className=" flex flex-wrap justify-center items-center md:flex-nowrap gap-4 py-4">
                    <form onSubmit={handleFormUpdate}>
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input variant="underlined" type="text" label="Name" name='name' defaultValue={loadedUser?.name} />
                            <Input variant="underlined" type="text" label="Status" name='status' maxlength="10" defaultValue={loadedUser?.status} />
                            <Input variant="underlined" type="email" label="Email" name='email' defaultValue={loadedUser?.email} />
                            <Button type="submit" color="primary" variant="shadow">Submit</Button>
                        </div>
                    </form>
                </div>


            </section>



        </>
    );
};

export default Update;