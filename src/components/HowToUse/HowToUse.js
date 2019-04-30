import React from 'react';
import './HowToUse.scss';
import Button from '../Common/Button/Button';

const HowToUse = ({ history }) => {
    return (
        <div className={'HowToUse'}>
            <h2>Login</h2>
            <p>
                You can use any data for user name and password or even no data. You can just click on login
                button and you will be authorized.
            </p>
            <p>
                For this purpose and also for purpose of handling order in restourant I used React Context API
                for sharing state between components. That means if you refresh the page all data will be
                lost.
            </p>
            <p>You can also remove authorization by clicking on logout button placed in the header.</p>

            <h2>Graphical view of a restaurant's floor plan</h2>

            <p>
                I created a constant.js file where I've added five tables. Every table has a shape,
                number, size and status. Clicking on any table you can change the status of table as well as
                create/make an order.
            </p>
            <p>Each created order will be shown in that modal and stored in context.</p>

            <h2>List of ordered dishes to prepare in a kitchen</h2>

            <p>
                Each created order has default status 'Ordered'. A kitchen stuff can change this status to 'Cooked'.
            </p>

            <h2>Utilise GitHub GraphQL API </h2>
            <p>
               To use their API you need to provide access token. The easiest way to do that is to introduce environment variable where you can
                paste your "Personal Access Token" from github account.
            </p>
            <h4>To use this functionality you have to add your "Personal Access Token" to ".env" file</h4>

            <Button onClickAction={() => history.push('/login')} blue buttonText={'Go to login'} />
        </div>
    );
};

export default HowToUse;
