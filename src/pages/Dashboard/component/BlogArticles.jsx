import * as React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '../../../components/Buttons/components/IconButton';
import Cards from '../../../components/Cards/component/BlogCards';
import Divider from '@mui/material/Divider';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';

const cardArray=[
    {headText:'Design: A Survival Guide for Beginners' , subtext:'Posted 3 days ago', statsNo:'120', statstext:'view', icon:true , color:{color:'green', border: '1px solid green',}},
    {headText:'Design: A Survival Guide for Beginners' , subtext:'Posted 3 days ago', statsNo:'00', statstext:'view', icon:false, color:{color:'tomato', border: '1px solid tomato',} },
    {headText:'Design: A Survival Guide for Beginners' , subtext:'Posted 3 days ago', statsNo:'00', statstext:'view', icon:false, color:{color:'#adad22', border: '1px solid #adad22',}},
    {headText:'Design: A Survival Guide for Beginners' , subtext:'Posted 3 days ago', statsNo:'120', statstext:'view', icon:true , color:{color:'green', border: '1px solid green',}},
    {headText:'Design: A Survival Guide for Beginners' , subtext:'Posted 3 days ago', statsNo:'120', statstext:'view', icon:true , color:{color:'green', border: '1px solid green',}},
]

function BlogArticles() {
    return (
        <div className="BlogArticles">
            <Grid container spacing={0} columns={12}>
                <Grid md={5} className='alignStart'>
                    <label className='boldLabel'>Title</label>
                </Grid>
                <Grid md={3} className='alignStart'>
                    <label className='boldLabel'>Status</label>
                </Grid>
                <Grid md={2} className='alignStart'>
                    <label className='boldLabel'>Stats</label>
                </Grid>
                <Grid md={2} className='alignEnd'>
                    <IconButton type={'primary'} text={'Add New'} icon={<EditLocationOutlinedIcon />} />
                </Grid>
            </Grid>

            <div style={{margin:'20px 0'}}>
                <Divider />
            </div>

            <Cards cardArray={cardArray}/>
        </div>
    );
}

export default BlogArticles;
