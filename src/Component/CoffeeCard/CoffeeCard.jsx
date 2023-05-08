import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;

  //Delete the card
  const handelDelete = id => {
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Coffee has been deleted.',
                'success'
              )
              const reaming = coffees.filter(cof=>cof._id !== _id)
              setCoffees(reaming)
            }
          })
      }
    })
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img className="w-52 h-52" src={photo} alt="Movie" /></figure>
      <div className="flex justify-between w-full pr-4">
        <div>
          <h2 className="card-title">Name:{name}</h2>
          <p>Quantity:{quantity}</p>
          <p>Supplier:{supplier}</p>
          <p>Taste:{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn rounded">View</button>
            <Link to ={`updatecoffee/${_id}`}>
            <button className="btn">Edit</button>
            </Link>
            <button className="btn bg-red-500 border-none"
              onClick={() => handelDelete(_id)}
            >X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;