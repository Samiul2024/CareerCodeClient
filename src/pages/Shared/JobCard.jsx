import React from 'react';

const JobCard = ({ job }) => {

    const { title, location, jobType, category, description, company,company_logo } = job;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;