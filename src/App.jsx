import Collage from "./Collage"
import student from "./Student"

// import Employee from "./Employee"

// const student=[
//   {
//     "rollno":120,
//     "name":"Arun",
//     "city":"Bhopal"
//   },
//   {
//     "rollno":121,
//     "name":"Rahul",
//     "city":"Betul"
//   },
//   {
//     "rollno":122,
//     "name":"jalaj",
//     "city":"hoshangabad"
//   },
//   {
//     "rollno":123,
//     "name":"subham",
//     "city":"Indore"
//   }
// ]

// const ans=student.map((key)=>{
//   return(
//     <>
//     <tr>
//       <td>{key.rollno}</td>
//       <td>{key.name}</td>
//       <td>{key.city}</td>
//     </tr>
//     </>
//   )
// })

// //---------------------------------------
// const ans1=Employee.map((key)=>{
//   return(
//     <>
//     <tr>
//       <td>{key.empno}</td>
//       <td>{key.name}</td>
//       <td>{key.salary}</td>
//       <td>{key.city}</td>
//     </tr>
//     </>
//   )
// })
// // const App=()=>{
// return(
// <>
// <table border="1" width="500" bgcolor="pink" align="center">
//   <tr bgcolor="orange">
//     <td>Emp num</td>
//     <td>Name</td>
//     <td>Salary</td>
//     <td>City</td>
//   </tr>
//   {ans1}
// </table>

// </>
// )
// // }
// export default App;

const ans=student.map((key)=>{<Collage nm={key.name} roll={key.rollno} ct={key.city} fee={key.fees}/>})
const App=()=>{
    return(
      <>
      <table>
        <tr>
          <th>Name</th>
          <th>Roll no</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
        {ans}
      </table>
      </>
    )
}