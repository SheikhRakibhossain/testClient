import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";

const Cards = ({service}) => {

    const {serviceName, Price, Category, Details} = service;
    console.log(service)
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
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://www.fiverr.com/rakib__101"
                            >
                                Visit source code on GitHub.
                            </Link>
                            <Button size="sm" color="primary">Edit</Button>
                            <Button size="sm" color="danger">Delete</Button>
                        </CardFooter>
                    </Card>
    );
};

export default Cards;