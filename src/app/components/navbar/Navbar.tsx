'use client';

import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="text-blue-700">
      <Logo
        src="/"
        alt="Logo"
        className="object-contain"
        height={100}
        width={100}
      />
    </nav>
  );
};