import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const AddUserForm = () => {
  const { addUser } = useContext(UserContext);
  const [form, setForm] = useState({
    image: "",
    name: "",
    surname: "",
    email: "",
    age: "",
    job: "",
  });
  const [imgaeUser, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result }); 
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form);
    setForm({ image: "", name: "", surname: "", email: "", age: "", job: "" });
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="flex">
        <input 
          type="file"
          accept="image/*" 
          onChange={handleImageChange}
        />
        {imgaeUser && (
          <img 
            src={imgaeUser} 
            alt="Selected preview" 
            style={{ width: "150px", height: "150px" }} 
          />
        )}
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Surname"
          value={form.surname}
          onChange={(e) => setForm({ ...form, surname: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Job"
          value={form.job}
          onChange={(e) => setForm({ ...form, job: e.target.value })}
        />
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default AddUserForm;
