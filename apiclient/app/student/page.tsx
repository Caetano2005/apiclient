import TableRowStudent from "../components/TableRowStudent";

export default async function Student() {
    const request = await fetch("https://serverapi-kappa.vercel.app/api/students");
    const ListStudent = await request.json();

    const students = [];

    for (const student of ListStudent) {
        students.push(<TableRowStudent key={student.id}student = {student}/>)
    }
    

    return (
        <div>  
        <h1>Lista de estudantes</h1>
        <table>
            <tbody>
                {students}
            </tbody>
        </table>
        
        </div>
    )
}