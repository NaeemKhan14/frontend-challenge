import { ReactElement } from 'react';
import history_data from '../../../dummyData.json';

export const UserHistoryView = (): ReactElement => {
  // Prepare table css style
  const styles = `
    table {
        border-collapse: collapse;
        width: 100%;
    }
    
    td, th {
        border: 3px solid #eee;
        text-align: center;
        padding: 10px;
    }
    
    tr:nth-child(even) {
        background-color: #eee;
    }
    `;
  // Prepare data from the json object
  const displayHistoryData = history_data.HISTORY_DATA.map((data) => {
    return (
      <tr>
        <td>{data.year}</td>
        <td>{data.month}</td>
        <td>{data.co2_saved}</td>
        <td>{data.reward}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Co2 Saved</th>
            <th>Reward</th>
          </tr>
        </thead>
        {/* Call the previously prepared data */}
        <tbody>{displayHistoryData}</tbody>
      </table>
      <style>{styles}</style>
    </div>
  );
};

export default UserHistoryView;
