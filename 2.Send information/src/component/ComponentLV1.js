import React from 'react';
import ComponentLv2 from './ComponentLV2';

const ComponentLv1 = (prop) => {
  const {navigationData,webCategoryData} = prop;
  return <div>ComponentLv1
    <ComponentLv2
      navigationData={navigationData} 
      webCategoryData={webCategoryData} 
    />
  </div>;
};
export default ComponentLv1;
