import { useState } from "react";

const ListRender1 = ()=>{
  const [list]= useState(["Lucas","Matheus","Victor"]);

  const [users, setUsers] = useState([
    {id:1, name:"Matheus", age:15},
    {id:2, name:"Josias", age:20},
    {id:3, name:"Ozzy", age:75}
  ])

  return(
    <div>
      <ul>
        {list.map((item)=>(
          <li>{item}</li>
        ))}
      </ul>
      {users.map((user)=>(
        <li key={user.id}>
          {user.name}-{user.age} anos
        </li>
      ))}
      <button onClick={() => setUsers(users.filter(user => user.id !== 1))}>
  Remover Matheus
</button> 
    </div>
  )
}

export default ListRender1;