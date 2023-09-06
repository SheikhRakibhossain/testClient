import { useLoaderData } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import Swal from "sweetalert2";

const User = () => {

    const users = useLoaderData();

    const handleDelete = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/user/${_id}`,{

        method:'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                return( Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'The user has been deleted from our database.',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  )
                }
            })
            window.location.reload()

    }

    return (
        <>
            <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>SL</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn>Delete</TableColumn>
            </TableHeader>
            <TableBody>
              {users.map(user => <TableRow key={user._id}>
              
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell> <Button onClick={()=>handleDelete(user._id)} size="sm">Delete</Button></TableCell>
              </TableRow>

              )}

            </TableBody>

          </Table>
        </>
    );
};

export default User;