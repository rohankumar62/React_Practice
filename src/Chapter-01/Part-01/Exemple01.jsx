function Exemple01() {
  const user = {
    name: "Vikash",
    role: "Developer",
  }

  user.role = "React Developer"

  console.log(user)

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  )
}

export default Exemple01