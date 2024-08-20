
'use client'
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [imageUrl, setImageUrl] = useState("");
  const imageref = useRef();

  const imageClickFunction = () => {
    imageref.current.click();
  };

  const handleImageInput = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setImageUrl(""); // Clear the image if no file is selected
      return;
    }



    const fileReader = new FileReader();
    fileReader.onload = () => {
        // console.log(fileReader.result)
      setImageUrl(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {imageUrl ? (
            <Image src={imageUrl} className={classes.image} fill alt="Selected Image" />
          ) : (
            <p>No Picked Image</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
         onChange={handleImageInput}
          required
          id={name}
          name={name}
          accept="image/jpg, image/png"
          ref={imageref}
        />
        <button className={classes.button} type="button" onClick={imageClickFunction}>
          Choose File
        </button>
      </div>
    </div>
  );
}
