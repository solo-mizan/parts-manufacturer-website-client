import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { name, _id } = deleteProduct;
    const handleDelete = id => {
        fetch(`http://loclhost:5000/product/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Product Deleted", { id: "ProductDelete" });
                    setDeleteProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="productDeleteModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete {name}?</h3>
                    <div className="modal-action">
                        <button onClick={() => { handleDelete(_id) }} className='btn btn-xs btn-accent'>Delete</button>
                        <label htmlFor="productDeleteModal" className="btn btn-xs btn-nuetral">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDeleteModal;