import React from 'react';
import { useLoaderData } from 'react-router-dom';

import SingleNews from '../SingleNews/SingleNews';

const News = () => {
    const news = useLoaderData()
    return (
        <div>
            <h1 className='text-6xl font-bold text-fuchsia-400 py-6'>Latest News</h1>
            <div className='grid grid-cols-4 gap-5 p-8'>
                {
                    news.map(item=> <SingleNews key={item.id} item={item}></SingleNews>)
                }
            </div>
        </div>
    );
};

export default News;