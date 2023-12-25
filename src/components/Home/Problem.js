import React, { useEffect, useState } from 'react';

const Problem = () => {
  const [show, setShow] = useState('all');
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [updatedData, setUpdatedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== '' && status !== '') {
      setData([...data, { name, status }]);
      setName('');
      setStatus('');
    }
  };
  useEffect(() => {
    setUpdatedData(data);
  }, [data]);
  
  const handleClick = (val) => {
    let filteredData;
    if (val === 'active') {
      filteredData = data.filter((item) => item.status === 'Active');
    } else if (val === 'completed') {
      filteredData = data.filter((item) => item.status === 'Completed');
    } else {
      filteredData = data;
    }
    setUpdatedData(filteredData);
    setShow(val);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h4 style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: '50px' }}>Problem-1</h4>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45%' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <input
                type="text"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <input
                type="text"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <button type="submit" style={{ padding: '8px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Submit
            </button>
          </form>
        </div>
        <div style={{ width: '50%' }}>
          <ul style={{ display: 'flex', marginBottom: '20px' }}>
            <li style={{ marginRight: '10px' }}>
              <button
                style={{ backgroundColor: show === 'all' ? '#007BFF' : '#fff', color: show === 'all' ? '#fff' : '#000', padding: '8px', cursor: 'pointer', border: '1px solid #ccc' }}
                onClick={() => handleClick('all')}
              >
                All
              </button>
            </li>
            <li style={{ marginRight: '10px' }}>
              <button
                style={{ backgroundColor: show === 'active' ? '#007BFF' : '#fff', color: show === 'active' ? '#fff' : '#000', padding: '8px', cursor: 'pointer', border: '1px solid #ccc' }}
                onClick={() => handleClick('active')}
              >
                Active
              </button>
            </li>
            <li>
              <button
                style={{ backgroundColor: show === 'completed' ? '#007BFF' : '#fff', color: show === 'completed' ? '#fff' : '#000', padding: '8px', cursor: 'pointer', border: '1px solid #ccc' }}
                onClick={() => handleClick('completed')}
              >
                Completed
              </button>
            </li>
          </ul>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
            <thead style={{ backgroundColor: '#f8f9fa' }}>
              <tr>
                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Name</th>
                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {updatedData?.length > 0 ? (
                updatedData.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.name}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" style={{ padding: '10px', textAlign: 'center' }}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem;
