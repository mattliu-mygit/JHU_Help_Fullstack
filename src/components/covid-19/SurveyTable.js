import React, { useState, useEffect } from 'react';
import { getData } from '../../api/SgaSurveyResultsApi';

const SurveyTable = () => {
  const [SGAData, setSGAData] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setSGAData(data);
    });
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Issue</th>
            <th>Response Percent</th>
          </tr>
        </thead>
        <tbody>
          {SGAData.map((data) => (
            <tr key={data._id}>
              <td>{data.label}</td>
              <td>{data.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default SurveyTable;
