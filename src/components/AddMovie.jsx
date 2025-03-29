import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);
  const [trailer, setTrailer] = useState("");
  const [preview, setPreview] = useState(null); // For image preview
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
      setPosterURL(imageURL); // Using the preview URL as poster URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating, trailer });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
    setTrailer("");
    setPreview(null);
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(Number(e.target.value))} required />
        <input type="text" placeholder="Trailer URL" value={trailer} onChange={(e) => setTrailer(e.target.value)} required />

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {preview && (
          <div style={{ margin: "10px 0" }}>
            <img src={preview} alt="Movie Poster Preview" style={{ width: "150px", height: "200px", objectFit: "cover" }} />
          </div>
        )}

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
