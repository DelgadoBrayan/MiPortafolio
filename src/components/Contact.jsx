import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import axios from "axios";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const missingFields = [];

    if (!form.name.trim()) missingFields.push("Name");
    if (!form.email.trim()) missingFields.push("Email");
    if (!form.message.trim()) missingFields.push("Message");
  
    if (missingFields.length > 0) {
      Swal.fire({
        title: "Please complete the following fields:",
        html: `<strong>${missingFields.join(", ")}</strong>`,
        icon: "warning",
        confirmButtonColor: "#f1c40f",
      });
      return;
    }

    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(form.email)){
      Swal.fire({
        title:"Please enter a valid email address",
        icon:"warning",
        confirmButtonColor:"#f1c40f"
      })
      return;
    }
    try {
      setLoading(true);
      const response =await axios.post('https://back-end-portafolio-1xvz.onrender.com/api/contactCompany', form)
      Swal.fire({
        title: response.data.msg,
        icon: "success",
        confirmButtonColor: "#3085d6",
       
      });
      setLoading(false)
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error intenta de nuevo",
        icon: "error",
        confirmButtonColor: "#d33",
      });
      setLoading(false)
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
