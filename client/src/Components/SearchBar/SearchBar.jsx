import { useState } from "react";
// import { useDispatch } from 'react-redux'
// import { searchDriver } from '../../Redux/Actions/actions';

const SearchBar = () => {
  // const dispatch = useDispatch();
  // const [forename, setForename] = useState("");

  // const handleChange = (e) => {
  //   setForename(e.target.value);
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   searchDriver(forename);
  // const clearInput = () => {
  //   setState("");
  // }
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <button>Search Driver</button>
      </form>
    </div>
  );
};

export default SearchBar;
