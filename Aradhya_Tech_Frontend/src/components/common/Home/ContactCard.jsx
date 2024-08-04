import React from 'react';

const ContactCard = ({ image, text }) => {
  return (
    <div className="w-[150px] h-[200px] flex flex-col items-center justify-center  ">
      <img src={image} alt="Image" className="h-[60px] w-[60px] rounded-full mb-4" />
      <p className="text-[#52525d] font-semibold text-xl text-center  text-ellipsis h-[40px]">{text}</p>
    </div>
  );
};

export default ContactCard;