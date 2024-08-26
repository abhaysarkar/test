import React from 'react';
import Card from './Card';

const Page2 = () => {

    const items = [

        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_640.jpg"
        },
        {
            name: "xyx",
            price: 100,
            description: "it is very beautiful product",
            url: "https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_640.jpg"
        },
    ]

    return (
        <div className="container d-block justify-content-center p-5">
            <h1 className='text-center'>Page2</h1>
            <div class="row">
                {items.map((item, index) => (
                    <Card
                        id={index}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
    );
}
export default Page2;





