import { useLoaderData } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

const User = () => {

    const users = useLoaderData();

    const handleDelete = _id =>{
        
        console.log(_id)
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
              {users?.map(user => <TableRow key={user.id}
              >
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