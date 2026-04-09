import React from "react";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();

  return (
    <div>
      <h2 className="font-bold">Name: {user.name}</h2>
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
      <p>
        Address: {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserDetailsPage;
