import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
const Cards = ({service, control, setControl}) => {

    const {serviceName, Price, Category, Details, _id} = service;
    // console.log(service)

const handleDelete =(id)=>{
    fetch(`http://localhost:5000/services/${_id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            alert('This services have deleted');
            setControl(!control)
        }
        
    })
    .catch(error =>console.log(error.message))
    console.log(id)
}

    return (
        <Card className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        <CardHeader className="flex gap-3">
                            
                            <div className="flex flex-col">
                                <p className="text-xl">Service:- {serviceName}</p>
                                <h4 className="text-xl text-default-500">Tk {Price}</h4>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p>{Category}</p>
                            <p>{Details}</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            
                                Visit source code on GitHub.
                            
                            <Link to={`/UpdateServices/${_id}`} ><Button size="sm" color="success" text="white">Edit</Button></Link>
                            <Button onClick={()=>handleDelete(_id)} size="sm" color="danger">Delete</Button>
                        </CardFooter>
                    </Card>
    );
};

export default Cards;