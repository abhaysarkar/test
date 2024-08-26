// const Card = ({ key, name, price, description, url }) => {

//     console.log(name)
//     console.log(price)

//     console.log(description)

//     console.log(url)


//     const modalId = `productDetails${key}`;




//     return (

//         <>
//             <div className="col-sm-3 mt-1">
//                 <div className="card">
//                     <div className="card-body justify-content-center bg-light">
//                         <img
//                             classNameName='rounded'
//                             src={url}
//                             alt=""
//                             style={{ height: '13em', width: '100%' }}
//                         />
//                         <h5 className="card-title">{name}</h5>
//                         <h4>Price: {price}</h4>
//                         <p className="card-text">{description}</p>
//                         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
//                             View
//                         </button>

//                     </div>
//                 </div>
//             </div>



//             <div class="modal fade" id={modalId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h5 class="modal-title" id="exampleModalLabel">Product Details</h5>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                         <img
//                             classNameName='rounded'
//                             src={url}
//                             alt=""
//                             style={{ height: '20em', width: '100%' }}
//                         />
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" class="btn btn-primary">Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>


//     );
// }

// export default Card;




const Card = ({ id, name, price, description, url }) => {

    console.log(name);
    console.log(price);
    console.log(description);
    console.log(url);

    // Generate a unique ID for the modal
    const modalId = `productDetails${id}`;

    return (
        <>
            <div className="col-sm-3 mt-1">
                <div className="card">
                    <div className="card-body justify-content-center bg-light">
                        <img
                            className="rounded"
                            src={url}
                            alt={name}
                            style={{ height: '13em', width: '100%' }}
                        />
                        <h5 className="card-title">{name}</h5>
                        <h4>Price: {price}</h4>
                        <p className="card-text">{description}</p>
                        <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                            View
                        </button>
                        <button className="btn btn-warning m-1">Add To Cart</button>
                    
                    </div>
                </div>
            </div>

            <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Product Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img
                                className="rounded"
                                src={url}
                                alt={name}
                                style={{ height: '20em', width: '100%' }}
                            />

                            <div>
                            <h5 className="card-title">{name}</h5>
                            <h4>Price: {price}</h4>
                            <p className="card-text">{description}</p>
                            <h5 className="card-title">{name}</h5>
                            <h4>Price: {price}</h4>
                            <p className="card-text">{description}</p>
                            <h5 className="card-title">{name}</h5>
                            <h4>Price: {price}</h4>
                            <p className="card-text">{description}</p>
                            <h5 className="card-title">{name}</h5>
                            <h4>Price: {price}</h4>
                            <p className="card-text">{description}</p>
                            <h5 className="card-title">{name}</h5>
                            <h4>Price: {price}</h4>
                            <p className="card-text">{description}</p>
                            <h5 className="card-title">{name}</h5>
                            <h4>Price: {price}</h4>
                            <p className="card-text">{description}</p>
                            <h5 className="card-title">{name}</h5>
                            <h4>Price: {price}</h4>
                            <p className="card-text">{description}</p>
                            <h5 className="card-title">{name}</h5>
                            <h4>Price: {price}</h4>
                            <p className="card-text">{description}</p>
                            <h5 className="card-title">{name}</h5>
                            <h4>Price: {price}</h4>
                            <p className="card-text">{description}</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
