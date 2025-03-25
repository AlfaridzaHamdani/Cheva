import React from "react";

const navbar = () => {
  return (
    <>
      <nav class="flex justify-between px-64 h-[7.5vh] border-b-2 border-gray-500 items-center bg-[#F7F4ED]">
        <h1 class="font-semibold text-2xl font-serif">Medium</h1>
        <ul class="flex gap-6">
          <li>Our story</li>
          <li>Membership</li>
          <li>Write</li>
          <li>Sign in</li>
          <li>
            <a href="#" class="bg-black text-white py-3 px-6 rounded-full">
              Get started
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
