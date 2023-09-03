import React, { useState } from 'react';
import DashboardDrawer from "../../../components/Drawer/component/Drawer"
import Grid from '@mui/material/Grid';
import styles from '../styles/Dashboard.module.css'
import uploadfileStyles from '../styles/Dashboard.module.css'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import IconButton from '../../../components/Buttons/components/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

const CreatePage = () => {
    return (
        <div>
            <DashboardDrawer component={<CreatePageComponent />} />
        </div>
    )
}

const CreatePageComponent = () => {
    const [pageName, setPageName] = useState('Home_Page')
    return (
        <>
            <Grid container spacing={0} columns={12} className={styles.filterContainer}>
                <Grid md={6} className='alignStart'>
                    <TextField
                        value={pageName}
                        onChange={(e) => setPageName(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BorderColorOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </Grid>
                <Grid md={6} className=''>
                    <div className='alignBetween'>
                        <label>Joe Bloggs</label>
                        <label className={uploadfileStyles.filterOptions}>Admin</label>
                        <IconButton type={'tertiary'} text={'Schedule page'} styles={{ backgroundColor: '#66ace5', border: 'none' }} icon={<AccessTimeIcon />} />
                        <IconButton type={'primary'} text={'Preview page'} icon={<VisibilityOutlinedIcon />} />
                    </div>

                </Grid>
            </Grid>

          <Grid container spacing={0} columns={12}>
            <div className={styles.fileUpload}>
                    <ControlPointOutlinedIcon/>
                <label className='boldLabel'>Add new section</label>
            </div>
            </Grid>
        </>
    )
}
export default CreatePage