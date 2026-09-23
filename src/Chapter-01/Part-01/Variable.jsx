function Variable() {
  
  const company = "Silent Digital Hub";

  let userStatus = "offline";
  userStatus = "online";
  
  const user = {
    name: "Rohan",
    role: "Developer",
  }

  // const name1 = "Rohan";
  // const name1 = "Rohan Kumar";
  //const ka variable dobara assign nhi kar sakte
  

  user.role = "React Developer"

  console.log(user)

  return (
    <>
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>

    <div>
      <h2>Company Details</h2>
      <p>Company: {company}</p>
      <p>Status: {userStatus}</p>
    </div>
    </>
  )
}

export default Variable