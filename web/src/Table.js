import React from 'react';

const Table = ({ movies }) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      { (movies.length > 0) ? movies.map( (movie, index) => {
        return (
          <tr key={ index }>
            <td>{ movie.id }</td>
            <td>{ movie.name }</td>
          </tr>
        )
      }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}
export default Table
