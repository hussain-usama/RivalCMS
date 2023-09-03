import React, { useState } from "react";
import DashboardDrawer from "../../../components/Drawer/component/Drawer";
import OceanView from '../../../assets/images/oceanView.jpg'
import Cards from "../../../components/Cards/component/FilesCard";
import FileDropzone from "../../../components/Dropzone/component/Dropzone";
import Grid from '@mui/material/Grid';
import styles from '../styles/Dashboard.module.css'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const cardArray = [
    { image: OceanView, fileFormat: 'OceanView.jpg', uploadText: 'Uploaded 2 days ago' },
    { image: OceanView, fileFormat: 'OceanView.jpg', uploadText: 'Uploaded 2 days ago' },
    { image: OceanView, fileFormat: 'OceanView.jpg', uploadText: 'Uploaded 2 days ago' },
    { image: OceanView, fileFormat: 'OceanView.jpg', uploadText: 'Uploaded 2 days ago' },
]

const UploadFiles = () => {
    return (
        <div>
            <DashboardDrawer component={<FileComponent />} />
        </div>
    )
}

const FileComponent = () => {

    const [filesArray, setfilesArray] = useState([...cardArray]); // state is created for functional
    const handleFileName = (obj) => {
        console.log(obj)
    }
    return (
        <>
            <Grid container spacing={0} columns={12}>
                <div className={styles.fileUpload}>
                    <FileDropzone handleFileName={handleFileName} />
                </div>
            </Grid>
                <Grid container spacing={0} columns={12} className={styles.filterContainer}>
                    <Grid md={6} className='alignStart'>
                        <TextField
                            id="input-with-icon-textfield"
                            placeholder="Search for file"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                    </Grid>
                    <Grid md={6} className=''>
                        <div className="alignBetween">
                            <label  className={styles.filterText}>Filter</label>
                            <label className={styles.filterOptions}>Images</label>
                            <label className={styles.filterOptions}>Files</label>
                            <label className={styles.filterOptions}>Audio</label>
                            <label className={styles.filterOptions}>Video</label>
                        </div>
                    </Grid>
                </Grid>
            <Cards cardArray={filesArray} />
        </>
    )
}

export default UploadFiles
