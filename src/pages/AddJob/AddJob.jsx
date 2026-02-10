import React from 'react';

const AddJob = () => {


    const handleAddAJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // console.log(formData.entries());

        const data=Object.fromEntries(formData.entries());
        console.log(data);
    }


    return (
        <div>
            <h2>Please add a job</h2>
            <form onSubmit={handleAddAJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="email" className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text"
                        name='company'
                        className="input" placeholder="Company name" />

                    <label className='label'>Location</label>
                    <input type="text" name="location" className='input' placeholder='Company location' />
                    <label className='label'>Company logo</label>
                    <input type="text" name='company_logo' className='input' placeholder='Company Logo URL' />
                    <button className="btn btn-neutral mt-4"></button>
                </fieldset>

                {/* Job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type  </legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" aria-label="On-Site" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" />
                    </div>

                </fieldset>
                {/* JOb Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select defaultValue="Job Category"
                        name='category'
                        className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Sales</option>
                        <option>Finance</option>
                    </select>

                </fieldset>
                {/* Application Deadline  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>

                    <input type="date" className="input" />

                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary range</legend>


                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text"
                                name='min'
                                className="input" placeholder="Minimum Salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text"
                                name='max'
                                className="input" placeholder="Maximum Salary" />

                        </div>
                        <div>
                            <label className="label">Currency</label>

                            <select defaultValue="Select a currency"
                                name='currency'
                                className="select">
                                <option disabled={true}>Select a currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>YUN</option>
                            </select>
                        </div>
                    </div>
                    {/* 
                    <input type="text" className="input" placeholder="Name" /> */}
                </fieldset>

                {/*Job Description  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea className="textarea" placeholder="Job Description"></textarea>

                </fieldset>
                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea className="textarea"
                        name='requirements' placeholder="Requirements (separate by comma)"></textarea>

                </fieldset>
                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea className="textarea"
                        name='responsibilities' placeholder="Job Responsibilities (separate by comma)"></textarea>

                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="email"
                        name='company'
                        className="input" placeholder="HR Email" />

                    <input type="submit" value="Add Job" className='btn' />
                </fieldset>

                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                </fieldset>

            </form>
        </div>
    );
};

export default AddJob;