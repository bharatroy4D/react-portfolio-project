import React from 'react';
import Banner from '../Banner/Banner';
import CategoriLists from '../CategoryLists/CategoriLists';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoriLists></CategoriLists>
            <FeatureJobs></FeatureJobs>

        </div>
    );
};

export default Home;