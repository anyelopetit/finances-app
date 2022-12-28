import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';

const expenses = [
    {
        name: 'Space T-Shirt',
        category: 'Clothing',
        percent: 50,
        color: 'orange'
    },
    {
        name: 'Portal Sticker',
        category: 'Accessories',
        percent: 16,
        color: 'cyan'
    },
    {
        name: 'Supernova Sticker',
        category: 'Accessories',
        percent: 67,
        color: 'pink'
    },
    {
        name: 'Wonders Notebook',
        category: 'Office',
        percent: 35,
        color: 'purple'
    },
    {
        name: 'Robots T-Shirt',
        category: 'Clothing',
        percent: 40,
        color: 'teal'
    }
];

const PercentTable = (props) => {
	const menu1 = useRef(null);

  return (
    <div className="card">
      <div className="flex justify-content-between align-items-center mb-5">
        <h5>{props.title}</h5>
        <div>
          <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-plain" onClick={(event) => menu1.current.toggle(event)} />
          <Menu
            ref={menu1}
            popup
            model={[
              { label: 'Add New', icon: 'pi pi-fw pi-plus' },
              { label: 'Remove', icon: 'pi pi-fw pi-minus' }
            ]}
          />
        </div>
      </div>
      <ul className="list-none p-0 m-0">
				{
          expenses.map((item) => (
						<li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
							<div>
								<span className="text-900 font-medium mr-2 mb-1 md:mb-0">{item.name}</span>
								<div className="mt-1 text-600">{item.category}</div>
							</div>
							<div className="mt-2 md:mt-0 flex align-items-center">
								<div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
									<div className={`bg-${item.color}-500 h-full`} style={{ width: '50%' }} />
								</div>
								<span className={`text-${item.color}-500 ml-3 font-medium`}>{item.percent}%</span>
							</div>
						</li>
					))
				}
      </ul>
    </div>
  );
}

export default PercentTable;