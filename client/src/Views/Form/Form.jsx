import React from "react";
import style from './form.module.css';
const Form = () => {
  return (
    <div className={style.container}>
      <form>
        <div className={style.imputContainer}>
          <label htmlFor="">ID |</label>
          <input type="text" name="id" placeholder="id" />
        </div>

        <div className={style.imputContainer}>
          <label htmlFor="">NAME |</label>
          <input type="text" name="name" placeholder="name" />
        </div>

        <div className={style.imputContainer}>
          <label htmlFor="">SURENAME |</label>
          <input
            type="text"
            name="surname"
            placeholder="surname"
            />
        </div>

        <div className={style.imputContainer}>
          <label htmlFor="">NATIONALITY | </label>
          <input
            type="text"
            name="nationality"
            placeholder="nationality"
            />
        </div>

        <div className={style.imputContainer}>
          <label htmlFor="">IMAGE | </label>
          <input
            type="text"
            name="image"
            placeholder="image"
            />
        </div>

        <div className={style.imputContainer}>
          <label htmlFor="">DESCRIPTION | </label>
          <input
            type="text"
            name="desccription"
            placeholder="desccription"
            />
        </div>

        <div className={style.imputContainer}>
          <label htmlFor="">DATE OF BORN | </label>
          <input
            type="text"
            name="dateOfBorn"
            placeholder="11-11-1111"
            />
        </div>

        <div className={style.imputContainer}>
          <label htmlFor="">TEAM | </label>
          <input
            type="text"
            name="team"
            placeholder="team"
            />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
