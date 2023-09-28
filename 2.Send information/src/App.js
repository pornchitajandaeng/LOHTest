import './App.css';
import ComponentLv1 from './component/ComponentLV1';
import React, { useState, useEffect } from 'react';

function App() {
  const [navigationData, setNaviationData] = useState([]);
  const [webCategoryData, setWebCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API



    async function fetchData() {
      await fetch('http://localhost:3001/webcategories')
        .then((response) => response.json())
        .then((data) => {
          console.log("Navigation DATA ");

          console.log(data);
          setWebCategoryData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });

      await fetch('http://localhost:3001/navigations')
        .then((response) => response.json())
        .then((data) => {
          console.log("WEB DATA ");
          console.log(data);
          setNaviationData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });

      console.log(navigationData);
      console.log(webCategoryData);
      console.log(loading);

    }

    fetchData();

  }, []);


  return (
    <div className="App">
      <ComponentLv1 
        navigationData={navigationData} 
        webCategoryData={webCategoryData}  
      />
      {/* <p>{JSON.stringify(navigationData) }</p>



      <br></br>

      <p>{JSON.stringify(webCategoryData)}</p> */}

    </div>
  );
}

export default App;
