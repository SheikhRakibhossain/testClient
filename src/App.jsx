import { Button, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useEffect, useState } from "react";
// import { Form } from "react-router-dom";

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error))
  }, [])

  const handleForm = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const status = form.name.status;
    const password = form.password.value;
    const email = form.email.value;
    const user = { name, status, email, password };
    console.log(user);
    form.reset('')
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)


    })
      .then(res => res.json())
      .then(data => {
        const newUsers = [...users, data];
        setUsers(newUsers)
        console.log(data)

      })
      .catch(error => console.log(error.message))



  }

  return (
    <>
      <section className="container mx-auto border px-40">
        <div className=" flex flex-wrap justify-center items-center md:flex-nowrap gap-4 py-4">
          <form onSubmit={handleForm}>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input variant="underlined" type="text" label="Name" name='name' />
              <Input variant="underlined" type="text" label="Status" name='status' />
              <Input variant="underlined" type="email" label="Email" name='email' />
              <Input variant="underlined" type="password" label="Password" name='password' />
              <Button type="submit" color="primary" variant="shadow">Submit</Button>
            </div>
          </form>
        </div>
        <div className="px-4 py-6">
          <h2 className="text-lg font-semibold">All users total:{users.length}</h2>

          <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>SL</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>Email</TableColumn>
            </TableHeader>
            <TableBody>
              {users.map(user => <TableRow key={user.id}
              >
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>

              )}

            </TableBody>

          </Table>
        </div>
      </section>
    </>
  );
};

export default App;