import { Button, Input} from "@nextui-org/react";
import Swal from 'sweetalert2'

// import { Form } from "react-router-dom";

const App = () => {

  const handleForm = event => {

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const status = form.status.value;
    const password = form.password.value;
    const email = form.email.value;
    const user = { name, status, email, password };
    console.log(user);
   
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)


    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'The user has been added into our database.',
            showConfirmButton: false,
            timer: 1500
          })
          
          form.reset('')
        }
      })
      .catch(error => console.log(error.message))



  }

  return (
    <>
      <section className="container mx-auto border px-40">
        <div className=" flex flex-wrap justify-center items-center md:flex-nowrap gap-4 py-4">
          <form onSubmit={handleForm}>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input isRequired variant="underlined" type="text" label="Name" name='name'  />
              <Input variant="underlined" type="text" label="Status" name='status' maxlength="10" isRequired />
              <Input variant="underlined" type="email" label="Email" name='email' isRequired/>
              <Input variant="underlined" type="password" label="Password" name='password' isRequired />
              <Button type="submit" color="primary" variant="shadow">Submit</Button>
            </div>
          </form>
        </div>
       
      </section>
    </>
  );
};

export default App;