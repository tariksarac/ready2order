import React from 'react';
import './HowToUse.scss';
import Button from '../Common/Button/Button';

const HowToUse = ({ history }) => {
    return (
        <div className={'HowToUse'}>
            <h2>Implement the login view of a Single-Page-Application</h2>
            <p>
                First part of this challenge task is build a simple login view in order to protect certain
                route from unauthorized user.
            </p>
            <p>
                You can use any data fro user name and password or even no data just click on login button and
                you will be authorized.
            </p>
            <p>
                For this purpose and also for purpose of handling order in restourant I use React Context API
                for sharing state between component. That mean if you referes the page all data will be lost
            </p>
            <p>You can also remove authorization by clicking on logout button in header </p>

            <h2>Graphical view of a restaurant's floor plan</h2>

            <p>
                Second part of this challenge task is build a simple Graphical view of a restaurant's floor. I
                create a constant.js file where I added five table. Every table has a shape, number, size and
                status. Clicking on any table you can change the status of table as well as create an order.
            </p>
            <p>Every created order will be shown in that modal and stored in context</p>

            <h2>List of ordered dishes to prepare in a kitchen</h2>

            <p>
                Third part of this challenge task is build a List of ordered dishes. Every created order has
                default status 'Ordered'. A kitchen stuff can change this status to 'Cooked'
            </p>

            <h2>Utilise any API of your choice</h2>
            <p>
                The las task was the utilize any API. Because you use GraphQL I decided to use GitHub GraphQL
                API for fetch users and their repositories. To use their API you need to provide access token.
                The easiest way to do that is to introduce environment variable where you can paste your
                "Personal Access Token" from github account.
            </p>
            <h4>To use this functionality you have to add your "Personal Access Token" to ".env" file</h4>

            <Button onClickAction={() => history.push('/login')} blue buttonText={'Go to login'} />
        </div>
    );
};

export default HowToUse;
