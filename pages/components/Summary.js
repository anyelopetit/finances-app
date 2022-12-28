import React from 'react';

const icons = ['shopping-cart', 'map-marker', 'inbox', 'comment']
const colors = ['blue', 'orange', 'cyan', 'purple']

const formatCurrency = (value) => {
  return value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const getRandom = (list) => {
  return list[Math.floor(Math.random() * list.length)];
}

const Summary = (props) => {
  console.log(props.amount)
  return (
      <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0">
              <div className="flex justify-content-between mb-3">
                  <div>
                      <span className="block text-500 font-medium mb-3">{props.title}</span>
                      <div className="text-900 font-medium text-xl">{formatCurrency(props.amount)}</div>
                  </div>
                  <div className={`flex align-items-center justify-content-center bg-${getRandom(colors)}-100 border-round`} style={{ width: '2.5rem', height: '2.5rem' }}>
                      <i className={`pi pi-${getRandom(icons)} text-${getRandom(icons)}-500 text-xl`} />
                  </div>
              </div>
              <span className="text-green-500 font-medium">{props.color}</span>
              <span className="text-500">since last visit</span>
          </div>
      </div>
  );
}

export default Summary;