export default function TableRowStudent({ student }:any) {
    return (
        <tr>
            <td>{student.nome}</td>
            <td>{student.ra}</td>
            <td>{student.email}</td>
        </tr>
    );
}