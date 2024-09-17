import React, { useState } from "react";

function FilterJob() {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [salary, setSalary] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  return (
    <>
      <div className="container mx-auto row justify-content-center w-50">
        <div className="col-md-4 col-12">
          <select
            className="form-select shadow"
            aria-label="Default select example"
            name="location"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="">Location</option>
            <option value="delhi">Delhi</option>
            <option value="noida">Noida</option>
            <option value="gurugram">Gurugram</option>
            <option value="pune">Pune</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="chandigarh">Chandigarh</option>
          </select>
        </div>
        <div className="col-md-4 col-12">
          <select
            className="form-select shadow"
            aria-label="Default select example"
            name="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Category</option>
            <option value="frontend">FrontEnd</option>
            <option value="fullstack">Full Stack Developer</option>
            <option value="backend">Backend</option>
          </select>
        </div>
        <div className="col-md-4 col-12">
          <select
            className="form-select shadow"
            aria-label="Default select example"
            name="salary"
            value={salary}
            onChange={handleSalaryChange}
          >
            <option value="">Salary</option>
            <option value="0-20k">0-20K</option>
            <option value="20-40k">20-40K</option>
            <option value="40k+">40K+</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default FilterJob;
