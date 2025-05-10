//import { useState } from "react";
import "./NavBar.css";
import { Link } from 'wouter';

export function NavBar() {

  return (
    <>
        <Link href="/table">
        <button>Click para viajar a tablas</button> 
        </Link>
    </>
  );
}