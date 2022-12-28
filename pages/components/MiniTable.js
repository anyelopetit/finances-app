import React from 'react';
import getConfig from 'next/config';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';

const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const MiniTable = (props) => {
  const contextPath = getConfig().publicRuntimeConfig.contextPath;

  return (
    <div className="card">
      <h5>{props.title}</h5>
      <DataTable value={props.items} rows={5} paginator responsiveLayout="scroll">
          <Column header="Image" body={(data) => <img className="shadow-2" src={`${contextPath}/demo/images/product/${data.image}`} alt={data.image} width="50" />} />
          <Column field="name" header="Name" sortable style={{ width: '35%' }} />
          <Column field="price" header="Price" sortable style={{ width: '35%' }} body={(data) => formatCurrency(data.price)} />
          <Column
              header="View"
              style={{ width: '15%' }}
              body={() => (
                  <>
                      <Button icon="pi pi-search" type="button" className="p-button-text" />
                  </>
              )}
          />
      </DataTable>
  </div>
  );
}

export default MiniTable;