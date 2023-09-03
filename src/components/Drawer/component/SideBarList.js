
import CameraOutdoorRoundedIcon from '@mui/icons-material/CameraOutdoorRounded';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';

export const sideBarList=[
    { icon:'', text:'Manage', active:false , listHead: true },
    { icon:CameraOutdoorRoundedIcon, text:'View site', active:false },
    { icon:NoteAddOutlinedIcon, text:'Create page', active:false ,route:'/dashboard/createPage'},
    { icon:EditLocationOutlinedIcon, text:'Blog articles', active:false , route:'/dashboard/blogArticles'},
    { icon:PhotoSizeSelectActualOutlinedIcon, text:'Files', active:false , route:'/dashboard/files'},
    { icon:PeopleAltOutlinedIcon, text:'Users', active:false },
    { icon:ElectricBoltOutlinedIcon, text:'Subscriptions', active:false },
    { icon:DeleteOutlineRoundedIcon, text:'Archived pages', active:false },
    { icon:'', text:'Pro features', active:false , listHead: true},
    { icon:ImportContactsRoundedIcon, text:'Themes', active:false },
    { icon:ViewInArRoundedIcon, text:'Plugins', active:false },
    { icon:FreeBreakfastOutlinedIcon, text:'Upgrade plans', active:false },
]