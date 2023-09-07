import { Link, useLoaderData } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import Swal from "sweetalert2";
import { useState } from "react";

const User = () => {

    const loadedUsers = useLoaderData();
    const [users , setUsers] = useState(loadedUsers);
    console.log(users)

    const handleDelete = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/user/${_id}`,{

        method:'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                 Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'The user has been deleted from our database.',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  const remaining = users.filter(user =>user._id !== _id);
                  setUsers(remaining)
                }
            })
            // window.location.reload()

    }

    return (
        <>
            <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>SL</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn>Update Action</TableColumn>
              <TableColumn>Delete Action</TableColumn>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => <TableRow key={user._id}>
              
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell> <Link to={`/update/${user._id}`} color="success" size="sm"><Button color="success" className="text-white">Edit</Button></Link></TableCell>
                <TableCell> <Button onClick={()=>handleDelete(user._id)} color="warning" size="sm">Delete</Button></TableCell>
              </TableRow>

              )}

            </TableBody>

          </Table>
        </>
    );
};

export default User;