import Swal from 'sweetalert2'

const AddCoffe = () => {

const handelAdd = event =>{
  event.preventDefault()
  const form = event.target
  const name = form.name.value
  const quantity = form.quantity.value
  const supplier = form.supplier.value
  const taste = form.taste.value
  const category = form.category.value
  const details = form.details.value
  const photo = form.photo.value
  console.log(name,quantity,supplier,taste,category,details,photo)
  const newCoffee = {name,quantity,supplier,taste,category,details,photo}
  console.log(newCoffee)


  // backend the send data 
  
  fetch('http://localhost:5000/coffee',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(newCoffee)
  })

  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.insertedId)
    {
      Swal.fire({
        title: 'Success!',
        text: 'Coffee Added Successfully',
        icon: 'success',
        confirmButtonText: 'Yea!'
      })
    }
    form.reset()
  })
}

  return (
    <div className="bg-gray-300 p-32" >
      <h1 className="text-3xl mb-3 font-extrabold ">Add A New Coffee</h1>
      <p className="mb-3 ">It is a long established fact that a reader will be distraceted by the readable <br /> content of a page when looking at its layout. The point of using Lorem Ipsum is that it <br />
        has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

      {/* from */}
      <form onSubmit={handelAdd} className=" text-center">

        {/* name & quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity:</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* supplier & taste row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Supplier Name:</span>
            </label>
            <label className="input-group">
              <span>Supplier</span>
              <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste:</span>
            </label>
            <label className="input-group">
              <span>Taste</span>
              <input type="text" name="taste" placeholder="Coffee Test" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* Category & Details row*/}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category:</span>
            </label>
            <label className="input-group">
              <span>Category</span>
              <input type="text" name="category" placeholder="Category Name" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details:</span>
            </label>
            <label className="input-group">
              <span>Details</span>
              <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* photo url */}
        <div className="form-control w-full ml-4 mb-8">
          <label className="label">
            <span className="label-text">Photo Url:</span>
          </label>
          <label className="input-group">
            <span>Photo</span>
            <input type="text" name="photo" placeholder="info@site.com" className="input input-bordered w-full" />
          </label>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block ml-4"/>
      </form>
    </div>
  );
};

export default AddCoffe;