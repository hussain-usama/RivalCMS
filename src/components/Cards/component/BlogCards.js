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
                            <Grid md={5} style={{ textAlign: 'start' }}>
                                <label className={styles.cardHeaderText}>{item?.headText}</label><br />
                                <label className={styles.cardHeaderSubText}>{item?.subtext}</label>
                            </Grid>
                            <Grid md={3} className="alignStart">
                                <Button text={'Published'} size={'small'} styles={{ ...BtnStyle, ...item?.color }} />
                            </Grid>
                            <Grid md={2} className="alignStart">
                                <label className={styles.cardHeaderText}>{item?.statsNo}</label>
                                <label className={`${styles.cardHeaderSubText} ${styles.textMargin}`}>{item?.statstext}</label>
                                {item?.icon && <ArrowCircleUpOutlinedIcon className={styles.cardStatsIcon} />}
                            </Grid>
                            <Grid md={2} className='alignEnd'>
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