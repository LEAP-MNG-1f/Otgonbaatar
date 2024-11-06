"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/users");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-1 w-full h-52 border">
      {users.map((user, index) => {
        return <div key={index}>{user.name}</div>;
      })}
    </div>
  );
}
