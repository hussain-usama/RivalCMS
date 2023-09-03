import React from "react";
import Grid from '@mui/material/Grid';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Button from "../../Buttons/components/Button";
import styles from '../styles/Cards.module.css';

const BtnStyle = {
    borderRadius: '34px',
    height: '26px',
    backgroundColor: 'transparent',
}

const Cards = (props) => {

    return (
        <>
            {props.cardArray.map((item, index) => {
                return (
                    <div className={styles.cardMain} key={index}>
                        <Grid container spacing={0} columns={12}>
                            <Grid md={3} style={{ textAlign: 'start' }}>
                                <img src={item?.image} width={100} height={70} />
                            </Grid>
                            <Grid md={3} className="alignStart">
                                <label >{item?.fileFormat}</label>
                            </Grid>
                            <Grid md={3} className="alignStart">
                                <label >{item?.uploadText}</label>
                            </Grid>
                            <Grid md={3} className='alignEnd'>
                                <MoreHorizOutlinedIcon />
                            </Grid>
                        </Grid>
                    </div>
                )
            })}

        </>
    )
}
export default Cards