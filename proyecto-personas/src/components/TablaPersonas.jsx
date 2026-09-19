export default function TablaPersonas({ personas }) {
  return (
    <div className="p2-table-wrapper">
      <table className="p2-table">
        <thead>
          <tr>
            <th>Apellidos</th>
            <th>Nombres</th>
          </tr>
        </thead>

        <tbody>
          {personas.length > 0 ? (
            personas.map((persona, index) => (
              <tr key={index}>
                <td>{persona.apellidos}</td>
                <td>{persona.nombres}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No se encontraron personas.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
