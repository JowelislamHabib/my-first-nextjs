import Link from "next/link";
import React, { use } from "react";
import { FaUser } from "react-icons/fa";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h2>Users Are coming here</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
              <FaUser size="4em" color="#fdfdfd" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{user.name}</h2>
              <p>Phone: {user.phone}</p>
              <p>Email: {user.email}</p>
              <p>Website: {user.website}</p>{" "}
              <p>
                Address: {user.address.street}, {user.address.city}
              </p>
              <div className="card-actions">
                <Link href={`/users/${user.id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
