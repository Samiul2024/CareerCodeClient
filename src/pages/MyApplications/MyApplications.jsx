import React from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';

const MyApplications = () => {
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <ApplicationList></ApplicationList>
        </div>
    );
};

export default MyApplications;