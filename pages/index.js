
import React, { useEffect, useState } from 'react';
import { ProductService } from '../demo/service/ProductService';
import { AccountService } from '../demo/service/AccountService';
import Summary from './components/Summary';
import MiniTable from './components/MiniTable';
import PercentTable from './components/PercentTable';
import ChartCard from './components/ChartCard';
import NotificationsCard from './components/NotificationsCard';
import CallToActionCard from './components/CallToActionCard';

const Dashboard = () => {
    const [products, setProducts] = useState(null);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then((data) => setProducts(data));

        const accountService = new AccountService();
        accountService.getAccounts().then((accounts) => setAccounts(accounts));
    }, []);

    return (
        <div className="grid">
            <div className="grid col-12">
                <Summary title="TOTAL" amount={accounts.reduce((sum, { amount }) => sum + amount, 0)} color={'asd'} />
                {accounts?.map((account) => (
                    <Summary title={account.title} amount={account.amount} color={account.color} />
                ))}
            </div>
            <div className="col-12 xl:col-6">
                <MiniTable title="Transactions" items={products} />
            </div>

            <div className="col-12 xl:col-6">
                <PercentTable title="Most expenses" />
                {/*
                  <ChartCard />
                  <NotificationsCard />
                  <CallToActionCard />
                */}
            </div>
        </div>
    );
};

export default Dashboard;
