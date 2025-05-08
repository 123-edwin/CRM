import './Client.css';
import refreshIcon from '/refresh.svg'; // Import the refresh icon
import { Link } from 'react-router';

import Table from '@mui/joy/Table';

export function Client() {
    return (
        <>
            <div className="options">
                <Link to='/form'>
                    <button className="btn-primary">+ Nuevo Cliente</button>
                </Link>
                <button className="btn-secondary">Importación De Clientes</button>
            </div >

            <section className='table-section'>

                <div className="table-container">

                    <div className='table-options'>

                        <select name="select" defaultValue="value2"> {/* Use defaultValue instead of selected */}
                            <option className='select-option' value="value2">25</option>
                            <option className='select-option' value="value3">30</option>
                        </select>

                        <section className='table-options-buttons'>
                            <button className="btn-option">Exportar</button>
                            <button className="btn-option">Acciones Masivas</button>
                            <button className="btn-icon"><img src={refreshIcon} alt="Refresh" className='refresh-icon' /></button> {/* Use the imported icon */}
                        </section>

                    </div>


<Table aria-label="basic table">
      <thead>
        <tr>
            
          <th>Calories</th>
          <th>Calories</th>
          <th>Fat</th>
          <th>Carbs</th>
          <th>Protein</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frozen yoghurt</td>
          <td>159</td>
          <td>6</td>
          <td>24</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Ice cream sandwich</td>
          <td>237</td>
          <td>9</td>
          <td>37</td>
          <td>4.3</td>
        </tr>

      </tbody>
    </Table>



                </div>
            </section>
        </>
    );
}