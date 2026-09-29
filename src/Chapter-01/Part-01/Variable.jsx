function Variable() {

  const company = "Silent Digital Hub";

  let userStatus;
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
      <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial", textAlign: "left" }}>
        <header style={{ marginBottom: "20px" }}>
            <h1>User Details</h1>
          <div  style={{ marginBottom: "20px", marginLeft: "20px" }}>
            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>
          </div>

          <div>
            <h2>Company Details</h2>
            <p>Company: {company}</p>
            <p>Status: {userStatus}</p>
          </div>
        </header>
      </div>
    </>
  )
}

export default Variable